import Navbar from './Components/Navbar/Navbar'
import Landing from './Pages/Landing'
import Logo from '/logot.png'
function App() {

 const production = <div className='container'>
      <h1>Under production</h1>
      <div className="loader"></div>
      <h2>mehdijafarzadehh4@gmail.com</h2>
      <h2>+989143259118</h2>
      </div>
  
  return (
    <>
      <Navbar />
      <Landing />


      {production}
    </>
  )
}

export default App
