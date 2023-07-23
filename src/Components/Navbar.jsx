import React, { useEffect, useState } from 'react'
// ----------- Firebase Imports -----------
import { onValue, ref } from 'firebase/database'
import { auth, db } from '../Config/Firebase'
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, signInWithRedirect } from 'firebase/auth'
// ------------ React Icons-------------------
import { AiOutlineCar } from 'react-icons/ai'
import { TbBuildingSkyscraper } from 'react-icons/tb'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaPlus } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { FaPhoneAlt } from 'react-icons/fa'
import { AiOutlineArrowLeft } from 'react-icons/ai'
// ------------------- Images -----------------
import Logo from '../Assests/SmallLogo.png'
import SecondaryLogo from '../Assests/Logo.png'
import Google from '../Assests/googlwe.png'
import Facebook from '../Assests/download.png'



import Modal from 'react-bootstrap/Modal';
import './Navbar.css'

function Navbar() {
    const [Category, setCategory] = useState([])
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [Email, setEmail] = useState('')
    useEffect(() => {
        const dbref = ref(db, 'Category')
        onValue(dbref, (snapShot) => {
            let data = snapShot.val()
            let newData = Object.values(data)
            setCategory(newData)
        })
        let email = localStorage.getItem('Email')
        if (email) {
            console.log(email)
            setEmail(email)
        }
    }, [])


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const gotoEmailModal = () => {
        setShow(false);
        setShow1(true)
    }
    const handleCloseModal2 = () => {
        setShow1(false)
    }
    const GoBack = () => {
        setShow1(false)
        setShow(true)
    }
    const HandleEmail = (e) => {
        setEmail(e.target.value)
    }
    // ------------------------------- SignUP with Email ------------------
    const Register = async () => {
        // alert(Email)
        localStorage.setItem('Email', Email)
        const register = await createUserWithEmailAndPassword(auth, Email, '1234567')
        alert('register')
    }
    // ----------------------- SignUP with GOOGLE ---------------------
    const GoogleSignIn = () => {
        const Google_provider = new GoogleAuthProvider()
        signInWithPopup(auth, Google_provider)
        // signInWithRedirect(auth,provider)
    }
    // ----------------------- SignUP with FACEBOOK ---------------------
    const FacebookSignIn = () => {
        const facebookProvider = new FacebookAuthProvider()
        signInWithPopup(auth, facebookProvider)
    }
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
                        <span variant="primary" onClick={handleShow}>
                            Login
                        </span>


                    </div>
                    <div className="sellDiv" onClick={handleShow}>

                        <img src="https://www.olx.com.pk/assets/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg" alt="" />
                        <span className='btnText'>
                            <FaPlus /> SELL
                        </span>

                    </div>


                </div>
            </header>
            {/* --------------------------- MODAL FORM -------------------- */}
            <Modal scrollable={true} show={show} onHide={handleClose} className='modal'>
                <Modal.Header closeButton>
                    <Modal.Title>

                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className='modalBody' >
                    <div className="modalBodyScroll">
                        <div className="imgLogo">
                            <img src="https://www.olx.com.pk/assets/brandIconLogin_noinline.93e8a1a9cf50902ba5250814f57810ff.svg" alt="" />
                        </div>
                        <div className="modalBodyContent">
                            <h4>
                                WELCOME TO OLX
                            </h4>
                            <p>
                                The trusted community of buyers and sellers.
                            </p>
                            <button className='registerBtn' onClick={GoogleSignIn}>
                                <img src={Google} alt="" className='btnIcon' />
                                <span>
                                    Continue with Google
                                </span>
                            </button >
                            <button className='registerBtn' onClick={FacebookSignIn}>
                                <img src={Facebook} alt="" className='btnIcon' />   <span>
                                    Continue with Facebook
                                </span>
                            </button>
                            <button className='registerBtn' onClick={gotoEmailModal}>
                                <HiMail className='btnIcon' size={'20px'} />
                                {/* <Link to='/Navbar/EmailCreate'> */}
                                <span>
                                    Continue with Email
                                </span>
                                {/* </Link> */}
                            </button>
                            <button className='registerBtn'>
                                <FaPhoneAlt className='btnIcon' />
                                <span>
                                    Continue with Phone
                                </span>
                            </button>

                            <span className='modalFooterText'>
                                By continuing, you are accepting
                                <br />
                                <a href="">
                                    OLX Terms of use
                                </a>
                                and
                                <a href="">
                                    Privacy Policy
                                </a>
                            </span>
                        </div>
                    </div>

                </Modal.Body>

            </Modal>
            {/* ------------------  MODAL 2 ------------------ */}
            <Modal scrollable={true} show={show1} onHide={handleCloseModal2} >


                <Modal.Header closeButton>
                    <Modal.Title>
                        <AiOutlineArrowLeft color='gray' onClick={GoBack} />
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className='modal2Body'>
                    <div className="imgLogo">
                        <img src="https://www.olx.com.pk/assets/brandIconLogin_noinline.93e8a1a9cf50902ba5250814f57810ff.svg" alt="" />
                    </div>
                    <h3>Enter Your Email</h3>

                    <input type="email" name="" id="" placeholder='Email' onChange={HandleEmail} className='EmailInp' value={Email} />

                    <button className={`${Email.includes('@gmail.com') == '' ? 'disabledBtn' : 'btn'}`} onClick={Register} >
                        Next
                    </button>
                    <p>We won't reveal your email to anyone else nor use it to send you spam.</p>
                </Modal.Body>

            </Modal>


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
