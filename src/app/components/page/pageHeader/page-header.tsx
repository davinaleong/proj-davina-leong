import "./page-header.scss"

export default function PageHeader({ children }: any) {
  return (
    <header className="main__header page__header | flow">{children}</header>
  )
}
