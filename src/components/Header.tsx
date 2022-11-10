import React from 'react'
import './style.css'

export const Header: React.FC = () => {
    return (
        <div className='displayFlex_spacebetween'>
            <div className='displayFlex_center title' style={{ gap: "10px" }}>
            <i className="fa-regular fa-shop"></i>
                <a className='project_title'>MY SHOPE</a>
            </div>

            <div  className='search_btn'>
                <input type="text" name="" id="" placeholder='search product' />
                <span>
                    <button>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </span>
            </div>

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
