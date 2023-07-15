import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { db } from '../Config/Firebase'
import Logo from '../Assests/SmallLogo.png'
import SecondaryLogo from '../Assests/Logo.png'
import './Navbar.css'
import { AiOutlineCar } from 'react-icons/ai'
import { TbBuildingSkyscraper } from 'react-icons/tb'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaPlus } from 'react-icons/fa'
function Navbar() {
    const [Category, setCategory] = useState([])
    useEffect(() => {
        const dbref = ref(db, 'Category')
        onValue(dbref, (snapShot) => {
            let data = snapShot.val()
            let newData = Object.values(data)
            setCategory(newData)
        })
    }, [])

    return (
        <>
            <header id='#top'>
                <div className="upNav">

                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="iconsDiv">
                        <span>

                            <AiOutlineCar className='icon' /><span>MOTORS
                            </span>
                        </span>
                        <span>

                            <TbBuildingSkyscraper className='icon' /> <span>
                                PROPERTY
                            </span>
                        </span>
                    </div>

                </div>
                <div className="middleNav">

                    <div className='secondaryLogo'>
                        <img src={SecondaryLogo} alt="" className='Logo' />
                    </div>
                    <div className="searchBars">

                        <AiOutlineSearch className='searchIcon' />
                        <select name="" id="">
                            <option value="" disabled selected>Pakistan</option>
                        </select>


                        <input type="text" name="" id="" placeholder='Find Cars, Mobile Phones and more...' />
                        <button className='searchBtn'>
                            <AiOutlineSearch />

                        </button>

                    </div>
                    <div className="LoginDiv">
                        <span>
                            Login
                        </span>

                    </div>
                    <div className="sellDiv">

                        
                            <img src="https://www.olx.com.pk/assets/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg" alt="" />
                            <span className='btnText'>
                                <FaPlus /> SELL
                            </span>
                    
                    </div>


                </div>
                </header>

{/* ----------------------------  Category ---------------------- */}
                <nav>

                    <ul className='categoriesUl'>
                        <li>
                            All Categories
                        </li>
                        {
                            Category !== null ?
                                Category.map((category, i) => {
                                    return (
                                        <>
                                            <li>
                                                {category.Category}
                                            </li>
                                        </>
                                    )
                                })
                                : alert("No category")
                        }
                    </ul>
                </nav>
          
        </>
    )
}

export default Navbar
