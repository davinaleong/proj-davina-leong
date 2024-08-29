import Image from "next/image"
import Link from "next/link"
import flagSg from "./assets/images/flag-sg.svg"
import PageHeader from "./components/page/pageHeader/page-header"
import ProjectCard from "./components/project-card/project-card"
import ArticleCard from "./components/article-card/article-card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCompassDrafting,
  faLaptopCode,
  faServer,
  faImage,
  faFileText,
  faFileImage,
} from "@fortawesome/free-solid-svg-icons"
import { getContentfulEntries } from "./lib/contentful"
import LibContentfulTypes from "./lib/contentful/types"

async function getLatestFourProjects() {
  return await getContentfulEntries(LibContentfulTypes.projects, 4)
}

async function getLatestSixArticles() {
  return await getContentfulEntries(LibContentfulTypes.articles, 6)
}

export default async function Home() {
  const projects = await getLatestFourProjects()
  const articles = await getLatestSixArticles()

  return (
    <main className="page page__main">
      <div className="wrapper wrapper-centered main__wrapper page__wrapper q-container q-container-wrapper | flow">
        {/* Hero Section */}
        <section className="section section-home sectio-home-hero">
          <PageHeader>
            <h1 className="page__header__h1">{`Davina Leong`}</h1>
            <p className="page__header__p">
              {`Full-stack web developer from sunny Singapore `}
              <Image
                src={flagSg.src}
                alt="Singapore Flag"
                width="20"
                height="20"
                className="inline-block"
              />
              {`.`}
            </p>
          </PageHeader>

          {projects.map((project: any, index: number) => (
            <ProjectCard key={`p${index}`} project={project} />
          ))}

          <p className="text-center">
            <Link href="">{`See more projects >>`}</Link>
          </p>
        </section>

        {/* Services Section */}
        <section className="section section-home section-home-services">
          <div className="tabs">
            <button className="btn-tab" type="button">
              {`Career Opportunities`}
            </button>
            <button className="btn-tab" type="button">
              {`Freelance Services`}
            </button>
          </div>

          <div className="tab-panes">
            <div className="tab-pane">
              <h2 className="text-2xl">{`Career Opportunities`}</h2>

              <div className="tab-pane__col">
                <FontAwesomeIcon icon={faCompassDrafting} />
                <p className="text-center">{`UX Design`}</p>
              </div>

              <div className="tab-pane__col">
                <FontAwesomeIcon icon={faLaptopCode} />
                <p className="text-center">{`Web Development`}</p>
              </div>

              <div className="tab-pane__col">
                <FontAwesomeIcon icon={faServer} />
                <p className="text-center">{`DevOps`}</p>
              </div>
            </div>

            <div className="tab-pane">
              <h2 className="text-2xl">{`Freelance Services`}</h2>

              <div className="tab-pane__col">
                <FontAwesomeIcon icon={faImage} />
                <p className="text-center">{`Landing Page`}</p>
              </div>

              <div className="tab-pane__col">
                <FontAwesomeIcon icon={faFileText} />
                <p className="text-center">{`Blog`}</p>
              </div>

              <div className="tab-pane__col">
                <FontAwesomeIcon icon={faFileImage} />
                <p className="text-center">{`Portfolio`}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-home section-home-contact">
          <h2 className="text-2xl">{`Let's get in touch...`}</h2>

          <form className="form" action="" method="post">
            <div className="form__group">
              <label htmlFor="input_firstName" className="form__group__label">
                {`Name `}
                <span className="text-red-500">{`*`}</span>
              </label>
              <input
                type="text"
                className="form__group__input"
                id="input_firstName"
                required
              />
            </div>
            <div className="form__group hidden">
              <input
                type="text"
                className="form__group__input"
                id="input_lastName"
              />
            </div>
            <div className="form__group">
              <label htmlFor="email" className="form__group__label">
                {`Email `}
                <span className="text-red-500">{`*`}</span>
              </label>
              <input
                type="email"
                className="form__group__input"
                id="email"
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="phone" className="form__group__label">
                {`Phone `}
                <span className="text-red-500">{`*`}</span>
              </label>
              <input
                type="tel"
                className="form__group__input"
                id="phone"
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="subject" className="form__group__label">
                {`Subject`}
                <span className="text-red-500">*</span>
              </label>
              <select name="subject" className="form__group__input" required>
                <option value="">{`-- Subjects --`}</option>
                <option>{`Job Opportunities`}</option>
                <option>{`Freelance Projects`}</option>
                <option>{`Support My Work`}</option>
                <option>{`Report a Bug`}</option>
                <option>{`Miscellaneous Inquiries`}</option>
              </select>
            </div>
            <div className="form__group">
              <label htmlFor="message" className="form__group__label">
                {`Message `}
                <span className="text-red-500">{`*`}</span>
              </label>
              <textarea
                name="message"
                className="form__group__input"
              ></textarea>
            </div>

            <div className="form__buttons">
              <button type="submit" className="btn btn-form btn-form-submit">
                {`Submit`}
              </button>
              <button type="reset" className="btn btn-form btn-form-reset">
                {`Reset`}
              </button>
            </div>
          </form>
        </section>

        <section className="section section-home section-home-articles | flow">
          <h2 className="text-2xl">{`Latest articles...`}</h2>

          <div className="article-grid">
            {articles.map((article: any, index: number) => (
              <ArticleCard key={`a${index}`} article={article} />
            ))}
          </div>
        </section>
        {/* ./header-grid */}
      </div>
      {/* ./wrapper */}
    </main>
  )
}
