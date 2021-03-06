import Link from 'next/link'
import Post from './Post'
import { PostOrPage } from '@tryghost/content-api'
import { useRouter } from 'next/router'

const PostList = ({
  posts,
  nextPage,
  isLastPage,
  isEditorialSelectionStripe,
  children,
}: {
  posts?: PostOrPage[]
  nextPage: number
  isLastPage: boolean
  isEditorialSelectionStripe?: boolean
  children?: any
}) => {
  const router = useRouter()
  return (
    <div className="col-lg-8 col-xl-8">
      {(posts || []).map((postData, index) => {
        if (isEditorialSelectionStripe && index === 9) {
          return <div key={index}>{children}</div>
        } else {
          return <Post data={postData} key={index} />
        }
      })}

      {!isLastPage && (
        <div className="d-flex justify-content-center">
          <Link
            scroll={false}
            href={`${router.asPath}?page=${nextPage}`}
            as={router.asPath}
          >
            <button
              className="w-auto axil-button button-rounded hover-flip-item-wrapper m-t-5"
              disabled={isLastPage}
            >
              Další
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default PostList
