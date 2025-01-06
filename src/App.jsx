
import './App.css'
import Header from './components/Header'
import Body from './pages/Body'
import {Toaster} from 'react-hot-toast'
function App()  {

  return (
    
    <>
    <video autoPlay loop muted className="fixed top-0 left-0 w-full h-full object-cover z-[-1] opacity-50">
        <source src="videoplayback.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    <Header/>
    <Body />
    <Toaster position="top-center" reverseOrder={false}/>
    </>
  )
}

export default App
