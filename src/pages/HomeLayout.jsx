import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Toolbar from "../components/Toolbar"
import { RotatingHero } from "../components"
const HomeLayout = () => {
  return (
    <>
   
      <Navbar />
      
      <section className="align-element py-6 ">
        <Outlet />
      </section>
      <Toolbar />
      
    </>
  )
}

export default HomeLayout