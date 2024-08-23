import { createRoot } from 'react-dom/client'
import {ChakraProvider} from '@chakra-ui/react'
import App from './App.jsx'
import SideNav from './Components/SideNav/SideNav.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <ChakraProvider>

  <SideNav>
    <App />
  </SideNav>
  </ChakraProvider>,
)
