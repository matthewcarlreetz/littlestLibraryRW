// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route
        path="/admin/libraries/new"
        page={NewLibraryPage}
        name="newLibrary"
      />
      <Route
        path="/admin/libraries/{id:Int}/edit"
        page={EditLibraryPage}
        name="editLibrary"
      />
      <Route
        path="/admin/libraries/{id:Int}"
        page={LibraryPage}
        name="library"
      />
      <Route path="/admin/libraries" page={LibrariesPage} name="libraries" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
