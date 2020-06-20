import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import LibraryForm from 'src/components/LibraryForm'

const CREATE_LIBRARY_MUTATION = gql`
  mutation CreateLibraryMutation($input: CreateLibraryInput!) {
    createLibrary(input: $input) {
      id
    }
  }
`

const NewLibrary = () => {
  const { addMessage } = useFlash()
  const [createLibrary, { loading, error }] = useMutation(
    CREATE_LIBRARY_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.libraries())
        addMessage('Library created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createLibrary({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Library</h2>
      </header>
      <div className="rw-segment-main">
        <LibraryForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewLibrary
