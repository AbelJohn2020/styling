import React from 'react'
import { Link } from 'react-router-dom';

const NavbarOption = ({name, link, styles}) => {
    return (
        <div>
            <Link to={link} className={styles}>
                {name}
            </Link>
        </div>
    )
}

export default NavbarOption;
