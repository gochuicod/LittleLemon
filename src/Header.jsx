import Wrapper from './components/Wrapper';
import { logo } from './assets';
import { CalendarRange, Home, Info, Menu, MenuSquare, ShoppingBasket, UserCircle2 } from 'lucide-react';
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useState } from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) return;
    setOpen(isOpen);
  };

  return (
    <Wrapper margin={true}>
      <nav className='flex flex-row justify-between items-center py-10'>
        <img src={logo} alt="Little Lemon Logo" />
        <section className='sm:flex hidden flex-row gap-x-10 font-medium'>
          <Link to='/LittleLemon/'>Home</Link>
          <Link to='about'>About</Link>
          <span>Menu</span>
          <span>Reservations</span>
          <span>Order Online</span>
          <span>Login</span>
        </section>
        <section className='sm:hidden flex'>
          <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <Menu/>
          </IconButton>
          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            <div
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <Home/>
                    </ListItemIcon>
                    <Link to='/LittleLemon/'>Home</Link>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <Info />
                    </ListItemIcon>
                    <Link to='about'>About</Link>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <MenuSquare />
                    </ListItemIcon>
                    <ListItemText primary="Menu" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <CalendarRange />
                    </ListItemIcon>
                    <ListItemText primary="Reservations" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <ShoppingBasket />
                    </ListItemIcon>
                    <ListItemText primary="Order Online" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <UserCircle2 />
                    </ListItemIcon>
                    <ListItemText primary="Login" />
                  </ListItemButton>
                </ListItem>
              </List>
            </div>
          </Drawer>
        </section>
      </nav>
    </Wrapper>
  )
}

export default Header;