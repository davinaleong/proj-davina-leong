export interface LibContentfulTypes {
  articles: string
  projects: string
  resume: string
  resumeLinkItem: string
  resumePeriodRecord: string
}

export const articles: string = `articles`
export const projects: string = `projects`
export const resume: string = `resume`
export const resumeLinkItem: string = `resumeLinkItem`
export const resumePeriodRecord: string = `resumePeriodRecord`

const LibContentfulTypes: LibContentfulTypes = {
  articles,
  projects,
  resume,
  resumeLinkItem,
  resumePeriodRecord,
}

export default LibContentfulTypes
