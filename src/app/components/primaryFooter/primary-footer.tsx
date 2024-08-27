import LibEnvVariables from "@/app/lib/env/env"
import "./primary-footer.scss"

const { APP_NAME, APP_AUTHOR, APP_YEAR } = LibEnvVariables

const nowYear: Number = new Date().getFullYear()
const appYear: Number = Number(APP_YEAR)
const copyrightYear: string =
  nowYear === appYear ? `${appYear}` : `${appYear} &ndash; ${nowYear}`

export default function PrimaryFooter() {
  return (
    <footer className="primary-footer">
      <div className="primary-footer__wrapper wrapper wrapper-centered q-container q-container-wrapper">
        <p className="text-sm text-center">
          {APP_NAME} &copy; {APP_AUTHOR}, {copyrightYear}
        </p>
      </div>
    </footer>
  )
}
