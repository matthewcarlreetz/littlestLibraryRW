import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_LIBRARY_MUTATION = gql`
  mutation DeleteLibraryMutation($id: Int!) {
    deleteLibrary(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const LibrariesList = ({ libraries }) => {
  const { addMessage } = useFlash()
  const [deleteLibrary] = useMutation(DELETE_LIBRARY_MUTATION, {
    onCompleted: () => {
      addMessage('Library deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete library ' + id + '?')) {
      deleteLibrary({ variables: { id }, refetchQueries: ['LIBRARIES'] })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>id</th>
            <th>address</th>
            <th>city</th>
            <th>state</th>
            <th>zip</th>
            <th>latitude</th>
            <th>longitude</th>
            <th>avatar</th>
            <th>status</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {libraries.map((library) => (
            <tr key={library.id}>
              <td>{truncate(library.id)}</td>
              <td>{truncate(library.address)}</td>
              <td>{truncate(library.city)}</td>
              <td>{truncate(library.state)}</td>
              <td>{truncate(library.zip)}</td>
              <td>{truncate(library.latitude)}</td>
              <td>{truncate(library.longitude)}</td>
              <td>{truncate(library.avatar)}</td>
              <td>{truncate(library.status)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.library({ id: library.id })}
                    title={'Show library ' + library.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editLibrary({ id: library.id })}
                    title={'Edit library ' + library.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete library ' + library.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(library.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LibrariesList
