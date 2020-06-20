import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_LIBRARY_MUTATION = gql`
  mutation DeleteLibraryMutation($id: Int!) {
    deleteLibrary(id: $id) {
      id
    }
  }
`

const Library = ({ library }) => {
  const { addMessage } = useFlash()
  const [deleteLibrary] = useMutation(DELETE_LIBRARY_MUTATION, {
    onCompleted: () => {
      navigate(routes.libraries())
      addMessage('Library deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete library ' + id + '?')) {
      deleteLibrary({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Library {library.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>id</th>
              <td>{library.id}</td>
            </tr>
            <tr>
              <th>address</th>
              <td>{library.address}</td>
            </tr>
            <tr>
              <th>city</th>
              <td>{library.city}</td>
            </tr>
            <tr>
              <th>state</th>
              <td>{library.state}</td>
            </tr>
            <tr>
              <th>zip</th>
              <td>{library.zip}</td>
            </tr>
            <tr>
              <th>latitude</th>
              <td>{library.latitude}</td>
            </tr>
            <tr>
              <th>longitude</th>
              <td>{library.longitude}</td>
            </tr>
            <tr>
              <th>avatar</th>
              <td>{library.avatar}</td>
            </tr>
            <tr>
              <th>status</th>
              <td>{library.status}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editLibrary({ id: library.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(library.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Library
