import React from 'react'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import CountryDropdown from '../CountryDropdown';
import { IoIosSearch } from "react-icons/io";
import { Button } from '@mui/material';
import { FaRegUser } from "react-icons/fa";


const Header = () => {
    return (
        <>
            <div className='headerWrapper'>
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className='mb-0 mt-0 text-center '>Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay.</p>
                    </div>
                </div>

                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}><img src={Logo} alt='Logo' /></Link>
                            </div>
                            <div className="col-sm-10 d-flex align-items-center part2">
                                <CountryDropdown />

                                {/* Header Search Start Here */}
                                <div className="headerSearch ml-3 mr-3">
                                    <input type="text" placeholder='Search For Products...' />
                                    <Button><IoIosSearch /></Button>
                                </div>

                                {/* Header Search End Here */}

                                <div className="part3 d-flex align-items-center ml-auto">
                                    <Button className='circle mr-3'><FaRegUser /></Button>
                                    <div className="ml-auto cartTab">
                                        <span className='price'>$3.29</span>
                                        <Button className='circle ml-2'></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header
