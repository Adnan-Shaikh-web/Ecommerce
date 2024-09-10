import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";
// import { Button } from '@mui/material';
import { IoMdClose } from 'react-icons/io';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const CountryDropdown = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    return (
        <>
            <Button className='countryDrop' onClick={() => setIsOpenModal(true)}>
                <div className="info d-flex flex-column">
                    <span className='label'>Your Location</span>
                    <span className='name'>India</span>
                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button>


            <Dialog open={isOpenModal} className='locationModal' TransitionComponent={Transition} onClose={() => setIsOpenModal(false)}>
                <h4 className='mb-0'>Choose your Delievery address: </h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className='close_' onClick={() => setIsOpenModal(false)}><IoMdClose /></Button>
                <div className="headerSearch w-100">
                    <input type="text" placeholder='Search your area...' />
                    <Button><IoIosSearch /></Button>
                </div>

                <ul className="countryList">
                    <li><Button onClick={() => setIsOpenModal(false)}>Pune</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Mumbai</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Nagpur</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Goa</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Nashik</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Pune</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Mumbai</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Nagpur</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Goa</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Nashik</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Pune</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Mumbai</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Nagpur</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Goa</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Nashik</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Pune</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Mumbai</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Nagpur</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Goa</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Nashik</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Pune</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Mumbai</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Nagpur</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Goa</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Nashik</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Pune</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Mumbai</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Nagpur</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Goa</Button></li>
                    <li><Button onClick={() => setIsOpenModal(false)}>Nashik</Button></li>
                </ul>
            </Dialog>
        </>
    )
}

export default CountryDropdown

