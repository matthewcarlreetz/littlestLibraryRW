import LibrariesLayout from 'src/layouts/LibrariesLayout'
import LibraryCell from 'src/components/LibraryCell'

const LibraryPage = ({ id }) => {
  return (
    <LibrariesLayout>
      <LibraryCell id={id} />
    </LibrariesLayout>
  )
}

export default LibraryPage
