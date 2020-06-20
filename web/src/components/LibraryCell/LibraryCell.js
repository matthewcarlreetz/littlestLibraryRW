import Library from 'src/components/Library'

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Library not found</div>

export const Success = ({ library }) => {
  return <Library library={library} />
}
