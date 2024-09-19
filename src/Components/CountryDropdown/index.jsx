import React, { useContext, useState, useEffect } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";
// import { Button } from '@mui/material';
import { IoMdClose } from 'react-icons/io';
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const CountryDropdown = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedTab, setSelectedTab] = useState(null);
    const [countryList, setCountryList] = useState([]);

    const context = useContext(MyContext);
    const selectCountry = (index, country) => {
        setSelectedTab(index)
        setIsOpenModal(false)
        context.setSelectedCountry(country);
    }

    useEffect(() => {
        setCountryList(context.countryList);
    }, [])

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();
        if (keyword !== '') {
            const list = countryList.filter((item) => {
                return item.country.toLowerCase().includes(keyword)
            })
            setCountryList(list)

        }
        else { setCountryList(context.countryList) }
    }



    return (
        <>
            <Button className='countryDrop' onClick={() => setIsOpenModal(true)}>
                <div className="info d-flex flex-column">
                    <span className='label'>Your Location</span>
                    <span className='name'>{context.selectedCountry !== '' ? context.selectedCountry.length > 10 ? context.selectedCountry?.substr(0, 10) + '...' : context.selectedCountry : 'Select Location'}</span>
                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button>


            <Dialog open={isOpenModal} className='locationModal' TransitionComponent={Transition} onClose={() => setIsOpenModal(false)}>
                <h4 className='mb-0'>Choose your Delivery address: </h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className='close_' onClick={() => setIsOpenModal(false)}><IoMdClose /></Button>
                <div className="headerSearch w-100">
                    <input type="text" placeholder='Search your area...' onChange={filterList} />
                    <Button><IoIosSearch /></Button>
                </div>

                <ul className="countryList mt-3">
                    {
                        countryList?.length !== 0 && countryList?.map((item, index) => {
                            return (
                                <li key={index}><Button onClick={() => selectCountry(index, item.country)} className={`${selectedTab == index ? 'active' : ''}`}>{item.country}</Button></li>
                            )
                        })
                    }
                </ul>
            </Dialog>
        </>
    )
}

export default CountryDropdown

