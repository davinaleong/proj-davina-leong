import Image from "next/image"
import Link from "next/link"
import placeholder from "./../../assets/images/article-placeholder.png"

import "./article-card.scss"

export interface ArticleCardPropsInterface {
  article: any
}

export default function ArticleCard(props: ArticleCardPropsInterface) {
  const { article } = props
  if (!article) return <></>
  const { fields } = article
  const { title, slug, description, image } = fields

  let thisSrc: any = placeholder
  let thisAlt: string = "No image"
  let thisWidth: any = 1920
  let thisHeight: any = 1080

  const thisImage = null
  if (image) {
    const { fields } = image
    const { file } = fields
    const { url, title, details } = file
    thisSrc = `http:${url}`
    thisAlt = `${title}`
    thisWidth = details.image.width
    thisHeight = details.image.height
  }

  return (
    <div className="article-card | flow">
      <Image
        src={thisSrc}
        alt={thisAlt}
        className="article-card__image"
        width={thisWidth}
        height={thisHeight}
      />
      <p className="article-card__label">{title}</p>
      <p>{description}</p>
      <p>
        <Link href={`articles/${slug}`}>{`Read more >>`}</Link>
      </p>
    </div>
  )
}
