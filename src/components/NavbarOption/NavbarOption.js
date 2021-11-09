import React from 'react'
import { Link } from 'react-router-dom';
import { Option } from './NavbarOptionsStyles';
import { IoSquareOutline } from "react-icons/io5";

const NavbarOption = ({id, name, link, state, setSate}) => {
    const handleClick = () => {
        const newState = { ...state, [id]: !state[id] }
        setSate(newState)
        console.log({ ...false, [id]: !state[id] })
        console.log(newState)
        console.log(state[id])
        console.log([id], 'id')
        console.log(Object.keys(state))
        console.log(state[`${id}`])
    }
    return (
        <Option state={state[id]}>
            <div className="white"></div>
            <Link to={link} className="styles" onClick={handleClick}>
                <IoSquareOutline className="icon"/>
                {name}
            </Link>
        </Option>
    )
}

export default NavbarOption;
