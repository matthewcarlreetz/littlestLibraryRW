import LibrariesLayout from 'src/layouts/LibrariesLayout'
import EditLibraryCell from 'src/components/EditLibraryCell'

const EditLibraryPage = ({ id }) => {
  return (
    <LibrariesLayout>
      <EditLibraryCell id={id} />
    </LibrariesLayout>
  )
}

export default EditLibraryPage
