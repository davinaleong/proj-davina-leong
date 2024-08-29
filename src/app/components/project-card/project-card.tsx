import Image from "next/image"
import placeholder from "./../../assets/images/project-placeholder.png"

import "./project-card.scss"

export interface ProjectCardPropsInterface {
  project: any
}

export default function ProjectCard(props: ProjectCardPropsInterface) {
  const { project } = props
  if (!project) return <></>
  const { fields } = project
  const { title, image } = fields

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
    <div className="project-card | flow">
      <Image
        src={thisSrc}
        alt={thisAlt}
        className="project-card__image"
        width={thisWidth}
        height={thisHeight}
      />
      <p className="project-card__label">{title}</p>
    </div>
  )
}
