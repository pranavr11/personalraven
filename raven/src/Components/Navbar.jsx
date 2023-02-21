import React from "react";
import {FaUserFriends} from "react-icons/fa"
import {HiOutlineBars3BottomRight} from "react-icons/hi2"
import { Drawer, Box, List, ListItemText} from '@mui/material';


import Logo from "../assets/ravenlogo.png"
export default function Navbar(){
    const [openMenu, SetOpenMenu] = React.useState(false)
    const menuItems= [
        {
            name: "Home",
        },
        {
            name: "Events",
        },
        {
            name: "Raven Time",
        },
        {
            name: "Friends",
        },
        {
            name: "Clubs",
        },
    ]
    const ListItemTextStyle = {
        margin: "0.5rem",
        fontWeight: "550",
        color: "black",
        fontSize: "1rem",
    }
 
    return(
        <nav className="nav-container">
            <div className="logo-container">
                <img src={Logo} alt="RHS Raven Logo" className="ravenlogo"/>
                <h1>RAVEN</h1>
            </div>
            
            <div className="navbar-links-container">
                <a href="/">Home</a>
                <a href="/events">Events</a>
                <a href="/raventime">Raven Time</a>
                <a href=""> <FaUserFriends /> Friends</a>
                <a href="">Clubs</a>
            </div>

            <div className="menu-container">
                    <HiOutlineBars3BottomRight size={28} onClick={()=>SetOpenMenu(true)}/>
            </div>
           
           <Drawer open={openMenu} anchor="right" onClose={() => SetOpenMenu(false)}>
                <Box 
                    sx={{width:250, height:"100%", backgroundColor:"#c90f2d"}}
                    onClick={() => SetOpenMenu(false)}
                    onKeyDown={() => SetOpenMenu(false)}
                >
                    <List>
                        {menuItems.map(
                            item => <ListItemText
                                primaryTypographyProps={{style : ListItemTextStyle}} // CSS
                                primary={item.name}
                                />)}
                    </List>
                </Box>
           </Drawer>

        </nav>
    )
}
