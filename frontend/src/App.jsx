import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './routes/Login'
import Menu from './routes/Menu'
import { ChakraProvider } from '@chakra-ui/react'

import PrivateRoute from './components/PrivateRoute'

import { AuthProvider } from './contexts/userAuth'

function App() {
  return (
    <ChakraProvider>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<PrivateRoute><Menu /></PrivateRoute>} />
          </Routes>
        </AuthProvider>
      </Router>
    </ChakraProvider>
  );
}

export default App
