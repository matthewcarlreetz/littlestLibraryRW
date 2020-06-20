import { Link, routes } from '@redwoodjs/router'

import Libraries from 'src/components/Libraries'

export const QUERY = gql`
  query LIBRARIES {
    libraries {
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

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No libraries yet. '}
      <Link to={routes.newLibrary()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ libraries }) => {
  return <Libraries libraries={libraries} />
}
