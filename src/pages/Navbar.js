import React, { useState } from 'react';
import ExtrasNavbar from '../components/ExtrasNavbar/ExtrasNavbar';
import { BottomNavbar, BoxPlus, CreateNew, Extras, LeftNavbar, LinearGradient, NameCreateNew } from '../components/Navbar/NavbarStyles';
import NavbarOption from '../components/NavbarOption/NavbarOption';
import { BiPlus } from "react-icons/bi";

const prevState = [
    { id: "1", active:false  },
    { id: "2", active:false  },
    { id: "3", active:false  },
    { id: "4", active:false  },
    { id: "5", active:false  },
    { id: "6", active:false  },
]

const options = [
    { id: "1", name: "home", link: "/home" },
    { id: "2", name: "my files", link: "/myfiles" },
    { id: "3", name: "resent files", link: "/resentfiles" },
    { id: "4", name: "shared files", link: "/sharedfiles" },
    { id: "5", name: "file request", link: "/filerequest" },
    { id: "6", name: "trash", link: "/trash" }
];

const footer = [
    { id: 1, name: "upload files" },
    { id: 2, name: "upload folder" },
    { id: 3, name: "new folder" },
    { id: 4, name: "more" },
]

const Navbar = () => {
    const [selected, setSelected] = useState(prevState)
    return (
        <LeftNavbar>
            <div className='topNavbar'>
                <LinearGradient width= "74px" height= "21px" margin="0 0 40px 32px"></LinearGradient>
                <div className='topNavbar__options'>
                    {
                        options.map(({id, name, link}) => (
                            <NavbarOption key={id} name={name} link={link} state={selected} setSate={setSelected} id={id} />
                        ))
                    }
                </div>
            </div>
            <BottomNavbar>
                <Extras>
                    {
                        footer.map(({id, name}) => (
                            <ExtrasNavbar key={id} name={name} />
                        ))
                    }
                </Extras>
                <CreateNew capitalize={false} padding="4px">
                    <NameCreateNew>
                        create new
                    </NameCreateNew>
                    <BoxPlus>
                        <BiPlus className='plus'/>
                    </BoxPlus>
                </CreateNew>
            </BottomNavbar>
        </LeftNavbar>
    )
}

export default Navbar;