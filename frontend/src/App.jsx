import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './routes/Login.jsx'
import Menu from './routes/Menu.jsx'
import Register from './routes/Register.jsx'

import { ChakraProvider } from '@chakra-ui/react'

import PrivateRoute from './components/PrivateRoute.jsx'

import { AuthProvider } from './context/useAuth.jsx'



function App() {
  return (
    <ChakraProvider>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<PrivateRoute><Menu /></PrivateRoute>} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </AuthProvider>
      </Router>
    </ChakraProvider>
  );
}

export default App
