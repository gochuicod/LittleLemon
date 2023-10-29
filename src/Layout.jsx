import { Outlet } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer";

const Layout = () => {
  return (
    <main className="flex flex-col">
      <Header/>
      <div className="min-h-screen">
        <Outlet/>
      </div>
      <Footer/>
    </main>
  )
}

export default Layout;