
import './App.css'
import Header from './components/Header'
import Body from './pages/Body'
import {Toaster} from 'react-hot-toast'
function App()  {

  return (
    <>
    <Header/>
    <Body />
    <Toaster position="top-center" reverseOrder={false}/>
    </>
  )
}

export default App
