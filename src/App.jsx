import {createContext, useState} from 'react'
import {VStack} from '@chakra-ui/layout'

import LogInButtons from './components/LogInButtons'
import PageLinks from './components/PageLinks'
import RouteList from './RouteList'

export const UserContext = createContext()

const App = () => {
  const [user, setUser] = useState({loggedIn: false})

  return (
    <UserContext.Provider value={{user, setUser}}>
      <VStack h='70vh' justify='space-evenly'>
        <LogInButtons />

        <PageLinks />

        <RouteList />
      </VStack>
    </UserContext.Provider>
  )
}

export default App
