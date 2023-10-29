import { Facebook, Instagram, Twitter } from "lucide-react";
import Wrapper from "./components/Wrapper";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#4F5E57] py-20">
      <Wrapper margin={true}>
        <footer className="flex sm:flex-row flex-col sm:justify-between justify-center sm:gap-y-0 gap-y-10 text-sm text-white">
          <section className="flex flex-col gap-y-5">
            <span className='text-[#F4CE14] font-bold font-serif text-4xl'>
              Little Lemon
            </span>
            <p>
              We are a family owned<br/>
              Mediterranean restaurant,<br/>
              focused on traditional<br/>
              recipes served with a modern<br/>
              twist.
            </p>
          </section>
          <section className="flex flex-col gap-y-5">
            <span className="text-2xl font-semibold">Important Links</span>
            <Link to='/LittleLemon/'>Home</Link>
            <Link to='about'>About</Link>
            <span>Menu</span>
            <span>Reservations</span>
            <span>Order Online</span>
            <span>Login</span>
          </section>
          <section className="flex flex-col gap-y-5">
            <span className="text-2xl font-semibold">Contact</span>
            <span>
              Address:<br/>
              123 Town Street, Chicago
            </span>
            <span>
              Phone:<br/>
              +00 123 456 789
            </span>
            <span>
              E-mail:<br/>
              little@lemon.com
            </span>
          </section>
          <section className="flex flex-col gap-y-5">
            <span className="text-2xl font-semibold">Social Media Links</span>
            <div className="flex flex-row">
              <Button className="gap-x-3" variant="text" sx={{ backgroundColor: "none", color: "white" }}>
                <Facebook/>
                <span>Facebook</span>
              </Button>
            </div>
            <div className="flex flex-row">
              <Button className="gap-x-3" variant="text" sx={{ backgroundColor: "none", color: "white" }}>
                <Instagram/>
                <span>Instagram</span>
              </Button>
            </div>
            <div className="flex flex-row">
              <Button className="gap-x-3" variant="text" sx={{ backgroundColor: "none", color: "white" }}>
                <Twitter/>
                <span>Twitter</span>
              </Button>
            </div>
          </section>
        </footer>
      </Wrapper>
    </div>
  )
}

export default Footer;