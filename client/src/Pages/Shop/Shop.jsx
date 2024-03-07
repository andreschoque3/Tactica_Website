import React, {useEffect} from 'react'
import './Shop.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Shop = () => {

    // link to proforma website
    const handleShopBtn = () => {
        const proformaURL = 'https://proforma.com/';

        window.open(proformaURL, '_blank')
    }

    // browser tab title
  useEffect(() => {
    document.title = 'TACTICA Shop';
  }, []);


  return (
    <div className='shop-pg'>

        <Navbar/>

        <section className='header-sh'>

            <div className='text-box'>
                <h1>TACTICA Shop</h1>
                <a className='shop-btn' onClick={handleShopBtn}>Browse our catalogue</a>
            </div>

        </section>

        <Footer/>
    </div>
  )
}

export default Shop