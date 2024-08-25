import Image from "next/image"
import Link from "next/link"
import placeholder from "./../../assets/images/placeholder.png"

import "./article-card.scss"

export default function ArticleCard() {
  return (
    <div className="article-card | flow">
      <Image
        src={placeholder.src}
        alt="Placeholder"
        width={1920}
        height={1080}
        sizes="100vw"
        className="article-card__image"
      />
      <p className="article-card__label">{`Article Title`}</p>
      <p>{`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores alias repellat excepturi quae ex ipsum atque hic quo reiciendis eveniet?`}</p>
      <p>
        <Link href="#">{`Read more >>`}</Link>
      </p>
    </div>
  )
}
