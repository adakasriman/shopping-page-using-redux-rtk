import React, { useState } from 'react'
// import { useSearchQuery } from '../services/productsApi';
import './style.css'

export const Header: React.FC = () => {
    const [searchData, setSearchData] = useState<string>();

    const searchEvent = () => {
        // useSearchQuery(searchData);
    }

    return (
        <div className='displayFlex_spacebetween'>
            <div className='displayFlex_center title' style={{ gap: "10px" }}>
                <i className="fa-regular fa-shop"></i>
                <a className='project_title'>MY SHOPE</a>
            </div>
            <form action="" onSubmit={searchEvent}>
                <div className='search_btn'>
                    <input type="text" value={searchData} onChange={(e) => setSearchData(e.target.value)} name="" id="" placeholder='search product' />
                    <span>
                        <button type='submit'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </span>
                </div>
            </form>

            <div className='displayFlex_spacebetween gap_15'>
                <div className='displayFlex_center gap_15'>
                    <button className='displayFlex_center cart_button'>
                        <div><i className="fa-solid fa-cart-shopping"></i></div>
                        <div className='cartItems'></div>
                    </button>
                    <button className='addProduct'>Add New</button>
                </div>

            </div>
        </div >
    )
}
