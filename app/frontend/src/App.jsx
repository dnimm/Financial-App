import { useEffect, useState } from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import LoginPage from './components/LoginPage'
import DashboardContainer from './components/DashboardContainer'
import { getToken, logout, exchangeCodeForToken  } from './auth'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getToken())
  const [authError, setAuthError] = useState('')

  useEffect(() => {
    async function checkCode() {
      const params = new URLSearchParams(window.location.search)
      const code = params.get('code') || params.get('token')

      if (code) {
        try {
          const token = await exchangeCodeForToken(code)
        
          setIsLoggedIn(true)
        } catch {
          setAuthError('Login failed. Please try again.')
          setIsLoggedIn(false)
        }
      }
    }

    checkCode()
  }, [])

  const handleLogout = () => {
    logout()
    setIsLoggedIn(false)
  }

  if (!isLoggedIn) {
    return <LoginPage authError={authError} />
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Doyel</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto">
              <Button variant="outline-light" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <DashboardContainer />
    </>
  )
}

export default App