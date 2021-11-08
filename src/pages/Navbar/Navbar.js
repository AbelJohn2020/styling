import React from 'react';
import NavbarOption from '../../components/NavbarOption/NavbarOption';

const options = [
    { id:1, name: "home", link: "/home" },
    { id:2, name: "my files", link: "/myfiles" },
    { id:3, name: "resent files", link: "/resentfiles" },
    { id:4, name: "shared files", link: "/sharedfiles" },
    { id:5, name: "file request", link: "/filerequest" },
    { id:6, name: "trash", link: "/trash" }
]

const Navbar = () => {
    return (
        <div>
            {
                options.map(({id, name, link}) => (
                    <NavbarOption key={id} name={name} link={link} />
                ))
            }
        </div>
    )
}

export default Navbar;