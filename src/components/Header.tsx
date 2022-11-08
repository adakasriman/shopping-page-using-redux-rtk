import React from 'react'
import './style.css'

export const Header: React.FC = () => {
    return (
        <div className='displayFlex_spacebetween p_20'>
            <div className='displayFlex_center' style={{ gap: "10px" }}>
                <i className="fa-solid fa-bag-shopping"></i>
                <a className='project_title'>Fake Shoping</a>
            </div>

            <div className='displayFlex_spacebetween gap_15'>
                <div className='displayFlex_center gap_15'>
                    <button className='displayFlex_center cart_button'>
                        <div><i className="fa-solid fa-cart-shopping"></i></div>
                        <div className='cartItems' ></div>
                    </button>
                    <button className='addProduct'>Add New</button>
                </div>
             
            </div>
        </div >
    )
}
