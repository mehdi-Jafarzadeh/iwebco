import Navbar from './Components/Navbar/Navbar'
import Landing from './Pages/Landing/Landing'
function App() {

 const production = <div className='container'>
      <h1>Under production</h1>
      <div className="loader"></div>
      <h2>mehdijafarzadehh4@gmail.com</h2>
      {/* <h2>+989143259118</h2> */}
      </div>

const p2 = <div className='container'>
      <h1>سایت در حالت تعمیر است</h1>
      <h3>در صورت نیاز با شماره زیر برای هماهنگی تماس بگیرید</h3>
      <div className="loader"></div>
      {/* <h2>mehdijafarzadehh4@gmail.com</h2> */}
      <h2>+989143259118</h2>
      با کلیک روی دکمه مستقیم تماس بگیرید
      <a href="tel:+989143259118"style={
        { color:"rgba(13, 0, 255, 1)",
          textDecoration:"none",
          background:"white",
          borderRadius:"10px",
          padding:"0.5rem",
          margin:"30px"
        }
      }>
        <b>
          تماس
        </b>
          </a>
      </div>
  
  return (
    <>
      <Navbar />
      <Landing />

      {p2}
      {production}
    </>
  )
}

export default App
