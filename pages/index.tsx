import { useEffect, useState } from 'react'

import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import MainBanner from 'components/HomePage/MainBanner'
import PostList from 'components/HomePage/PostList/PostList'
import { PostOrPage } from '@tryghost/content-api'
import SideBar from 'components/Layout/SideBar'
import { getPosts } from './api/posts'
import styles from 'styles/Home.module.scss'

export const POSTS_ON_PAGE_LIMIT = 15

// Fetch posts
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context

  const page = Number(query?.page) || 1

  const posts = await getPosts({
    limit: POSTS_ON_PAGE_LIMIT,
    page,
    include: ['tags', 'authors'],
  })

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts }, // will be passed to the page component as props
  }
}

const Home = ({ posts }: { posts?: PostOrPage[] }) => {
  const [postsState, setPostsState] = useState<PostOrPage[]>([])
  const [nextPage, setNextPage] = useState(1)

  useEffect(() => {
    if (!posts) return
    setPostsState([...postsState, ...posts])
    setNextPage(nextPage + 1)
  }, [posts])

  return (
    <div className={styles.container}>
      <Head>
        <title>Cryptohash | Ethereum, Bitcoin a jiné krypto</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        {postsState && <MainBanner data={postsState?.slice(0, 3) || []} />}
        <div className="container">
          <div className="axil-post-list-area post-listview-visible-color axil-section-gap bg-color-white">
            <div className="row">
              <PostList
                posts={postsState}
                nextPage={nextPage}
                isLastPage={posts?.length !== POSTS_ON_PAGE_LIMIT}
              />
              <SideBar />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home