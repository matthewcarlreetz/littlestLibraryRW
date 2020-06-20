import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import LibraryForm from 'src/components/LibraryForm'

export const QUERY = gql`
  query FIND_LIBRARY_BY_ID($id: Int!) {
    library: library(id: $id) {
      id
      address
      city
      state
      zip
      latitude
      longitude
      avatar
      status
    }
  }
`
const UPDATE_LIBRARY_MUTATION = gql`
  mutation UpdateLibraryMutation($id: Int!, $input: UpdateLibraryInput!) {
    updateLibrary(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ library }) => {
  const { addMessage } = useFlash()
  const [updateLibrary, { loading, error }] = useMutation(
    UPDATE_LIBRARY_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.libraries())
        addMessage('Library updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateLibrary({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Library {library.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <LibraryForm
          library={library}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
