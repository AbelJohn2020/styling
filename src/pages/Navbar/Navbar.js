import React from 'react';
import NavbarOption from '../../components/NavbarOption/NavbarOption';

const Navbar = () => {
    return (
        <div>
            <NavbarOption name="home" link="/home" styles="home" />
        </div>
    )
}

export default Navbar;