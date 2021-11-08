import React from 'react'
import { Link } from 'react-router-dom';

const NavbarOption = ({name, link}) => {
    return (
        <div>
            <Link to={link} className="styles">
                <div className="square"></div>
                {name}
            </Link>
        </div>
    )
}

export default NavbarOption;
