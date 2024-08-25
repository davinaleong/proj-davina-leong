import Link from "next/link"
import "./primary-header.scss"

export default function PrimaryHeader() {
  return (
    <header className="primary-header">
      <div className=" primary-header__wrapper wrapper wrapper-centered q-container q-container-wrapper">
        <nav className="primary-header__wrapper__nav primary-header__wrapper__nav__left">
          <Link href="/">DL</Link>
        </nav>

        <nav className="primary-header__wrapper__nav primary-header__wrapper__nav__right">
          <Link href="/about">About</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  )
}
