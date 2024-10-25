import Header from './assets/components/Header'
import { UserProvider } from './assets/components/userDetails'


function App() {
  return (
    <div>
      <UserProvider  value="mohammed arif">
    	  <Header/>
      </UserProvider>
    </div>
  )
}

export default App
