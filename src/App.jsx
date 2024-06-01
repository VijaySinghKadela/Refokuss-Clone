import Cards from "./components/Cards"
import Footer from "./components/Footer"
import Marquees from "./components/Marquees"
import Navber from "./components/Navber"
import Products from "./components/Products"
import Stripes from "./components/Stripes"
import Work from "./components/Work"

const App = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-900 font-["satoshi"] text-white'>
      
      <Navber/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marquees/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App