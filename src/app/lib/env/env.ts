export interface LibEnvVariablesInterface {
  APP_NAME: string
  APP_DESCRIPTION: string
  APP_YEAR: string
  APP_AUTHOR: string
}

export const APP_NAME: string = `${process.env.APP_NAME}`
export const APP_DESCRIPTION: string = `${process.env.APP_DESCRIPTION}`
export const APP_YEAR: string = `${process.env.APP_YEAR}`
export const APP_AUTHOR: string = `${process.env.APP_AUTHOR}`

const LibEnvVariables: LibEnvVariablesInterface = {
  APP_NAME,
  APP_DESCRIPTION,
  APP_YEAR,
  APP_AUTHOR,
}

export default LibEnvVariables
