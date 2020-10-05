import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Route exact path='/' component={HomePage} />
            <Route path='/product/:id' component={ProductPage} />
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
