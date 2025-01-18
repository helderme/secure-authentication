import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './routes/login'
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App
