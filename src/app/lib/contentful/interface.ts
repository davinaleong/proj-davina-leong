import LibContentfulEnvVars, {
  LibContentfulEnvVarsInterface,
} from "./variables"
import LibContentfulSdk, { LibContentfulSdkInterface } from "."
import { LibContentfulTypes } from "./types"

export interface LibContentfulInterface {
  LibContentfulEnvVars: LibContentfulEnvVarsInterface
  LibContentfulSdk: LibContentfulSdkInterface
}

const LibContentful: LibContentfulInterface = {
  LibContentfulEnvVars,
  LibContentfulSdk,
}

export default LibContentful
