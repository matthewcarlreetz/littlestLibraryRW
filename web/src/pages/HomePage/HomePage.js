import { useAuth } from '@redwoodjs/auth'

const HomePage = () => {
  const { logIn } = useAuth()

  return (
    <div>
      <h1>HomePage</h1>
      <p>Find me in ./web/src/pages/HomePage/HomePage.js</p>
      <a href="#" onClick={logIn}>
        Log In
      </a>
    </div>
  )
}

export default HomePage
