import Link from 'next/link'
import { PostOrPage } from '@tryghost/content-api'
import { formatGhostDataForArticlePost } from 'components/helpers/formatGhostDataForArticlePost'
import styles from './EditorialSelectionStripe.module.scss'

export default function EditorialSelectionStripe({
  articlesData,
}: {
  articlesData: PostOrPage[]
}) {
  const _articlePreview = (article: PostOrPage) => {
    const {
      detailUrl,
      category,
      frontImg,
      author,
      readTime,
      date,
      title,
    } = formatGhostDataForArticlePost(article)

    return (
      <div key={title} className="slick-single-layout">
        <div className="content-block modern-post-style text-center content-block-column">
          <div className="post-content">
            <div className="post-cat">
              <div className="post-cat-list">
                <a className="hover-flip-item-wrapper">
                  <span className="text-dark cursor-default">
                    <span data-text={category}>
                      {category?.toLocaleUpperCase()}
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <h4 className={` ${styles.previewTitle} title`}>
              <Link href={`/${detailUrl}`}>
                <a>{title}</a>
              </Link>
            </h4>
          </div>
          <div className="post-thumbnail">
            <Link href={`/${detailUrl}`}>
              <a>
                {frontImg?.url && (
                  <img src={frontImg.url} alt={frontImg?.alt} />
                )}
              </a>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const _mainTitle = () => (
    <div className="row">
      <div className="col-lg-12 p-0">
        <div className="section-title">
          <h2 className="title">Výběr redakce</h2>
        </div>
      </div>
    </div>
  )

  const Wrapper = ({ children }: { children: any }) => (
    <div className={`${styles.wrapper} row p-0`}>
      <div className="col-lg-12 p-0">
        {/* <!-- Start Tab Content Wrapper  --> */}
        <div className="tab-content" id="axilTabContent">
          <div
            className="single-tab-content tab-pane fade show active"
            id="tabone"
            role="tabpanel"
            aria-labelledby="tab-one"
          >
            <div className="modern-post-activation slick-layout-wrapper axil-slick-arrow arrow-between-side">
              {children}
            </div>
          </div>
        </div>
        {/* <!-- End Tab Content Wrapper  --> */}
      </div>
    </div>
  )

  return (
    <>
      <div className="axil-tab-area axil-section-gap bg-color-white">
        <div className={`${styles.spacer} container`}>
          {_mainTitle()}
          <Wrapper>
            {articlesData.map((article: PostOrPage) =>
              _articlePreview(article),
            )}
          </Wrapper>
        </div>
      </div>
    </>
  )
}