import Image from "next/image"
import placeholder from "./../../assets/images/placeholder.png"

import "./project-card.scss"

export default function ProjectCard() {
  return (
    <div className="project-card | flow">
      <Image
        src={placeholder.src}
        alt="Placeholder"
        width={1920}
        height={1080}
        sizes="100vw"
        className="project-card__image"
      />
      <p className="project-card__label">{`Website Name`}</p>
    </div>
  )
}
