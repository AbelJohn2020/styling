import React from 'react'
import { Link } from 'react-router-dom';
import { Option } from './NavbarOptionsStyles';
import { IoSquareOutline } from "react-icons/io5";

const NavbarOption = ({id, name, link, state, setSate}) => {
    const handleClick = (event) => {
        const newArr = state.map((prevState) => {
            if(prevState.id === event.currentTarget.id ) {
                return { id: prevState.id, active: prevState.active = true }
            } else {
                return { id: prevState.id, active: prevState.active = false }
            }
        })
        const add = [...state, ...newArr]
        const newState = add.filter( (addStates, index, self) => index === self.findIndex((s) => s.id === addStates.id && s.active === addStates.active))
        setSate(newState)
    }
    
    const findTrue = (divId) => {
        if(handleClick) {
            return state.find(({id, active}) => divId === id && active === true)
        }
    }
    
    const blankSpace = findTrue(id) !== undefined && findTrue(id);

    return (
        <Option state={blankSpace} id={id}>
            <div className="white"></div>
            <Link to={link} className="styles" onClick={handleClick} id={id}>
                <div className='icon'>
                    <IoSquareOutline/>
                </div>
                <div className='name'>
                    {name}
                </div>
            </Link>
        </Option>
    )
}

export default NavbarOption;
