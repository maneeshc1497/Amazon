import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div>
            
            <div className='home'>
                <img className='home__img' src='https://m.media-amazon.com/images/I/61aUfpZteZL._SX3000_.jpg' alt=''/>
            </div>
            <div className='home__row'>
                <Product id='1' title='OnePlus Bullets Bluetooth Wireless Z Bass Edition in Ear Earphones with Mic (Black)' rating={4} price={1999} img='https://m.media-amazon.com/images/I/51R4FJdgbMS._AC_UL480_QL65_.jpg'/>
                <Product id='2' title='Redmi 9 Activ (Coral Green, 4GB RAM, 64GB Storage)' rating={4} price={9499} img='https://m.media-amazon.com/images/I/91kAtEXPIeL._AC_UL480_QL65_.jpg'/>
                <Product id='3' title="TIMEWEAR Digital Men's Watch" rating={5} price={699} img='https://m.media-amazon.com/images/I/81qcmjX9TrL._AC_UL480_FMwebp_QL65_.jpg'/>
                
            </div>
            <div className='home__row'>
                <Product id='4' title="Women's Regular T-Shirt (Pack of 2)" rating={5} price={399} img='https://m.media-amazon.com/images/I/61uhXK52dnL._AC_UL480_FMwebp_QL65_.jpg'/>
                <Product id='5' title="Allen Solly Men's Sweatshirt" rating={4} price={769} img='https://m.media-amazon.com/images/I/51vb7LJ3oQL._AC_UL480_FMwebp_QL65_.jpg'/>
                <Product id='6' title="Reebok Men's Clubpro Casual Shoe" rating={3} price={1496} img='https://m.media-amazon.com/images/I/81uzOXjFpYL._AC_UL480_QL65_.jpg'/>
                
            </div>
            
        </div>
    )
}

export default Home
