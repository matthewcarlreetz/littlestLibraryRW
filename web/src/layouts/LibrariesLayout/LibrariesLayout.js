import { Link, routes } from '@redwoodjs/router'
import { Flash } from '@redwoodjs/web'

const LibrariesLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Flash timeout={1000} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.libraries()} className="rw-link">
            Libraries
          </Link>
        </h1>
        <Link to={routes.newLibrary()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Library
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default LibrariesLayout
