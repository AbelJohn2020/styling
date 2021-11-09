import React, { useState } from 'react';
import { LeftNavbar } from '../components/Navbar/NavbarStyles';
import NavbarOption from '../components/NavbarOption/NavbarOption';

const options = [
    { id: "1", name: "home", link: "/home" },
    { id: "2", name: "my files", link: "/myfiles" },
    { id: "3", name: "resent files", link: "/resentfiles" },
    { id: "4", name: "shared files", link: "/sharedfiles" },
    { id: "5", name: "file request", link: "/filerequest" },
    { id: "6", name: "trash", link: "/trash" }
]

const Navbar = () => {
    const [selected, setSelected] = useState({
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
    })
    return (
        <LeftNavbar>
            {
                options.map(({id, name, link}) => (
                    <NavbarOption key={id} name={name} link={link} state={selected} setSate={setSelected} id={id} />
                ))
            }
        </LeftNavbar>
    )
}

export default Navbar;