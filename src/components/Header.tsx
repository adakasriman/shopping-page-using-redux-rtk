import React, { useState } from 'react'
// import { useSearchQuery } from '../services/productsApi';
import './style.css'
import { useNavigate, useSearchParams } from 'react-router-dom'

export const Header: React.FC = () => {
    const [searchParams, SetSearchParams] = useSearchParams();
    const [searchData, setSearchData] = useState<string>("")
    // const [query, setQuery] = useState<string | any>(searchParams.get('q'))
    // const [query, setQuery] = useState<string>("");

    const navigate = useNavigate();

    const searchEvent = (e: React.FormEvent) => {
        e.preventDefault();

        // <Navigate to="/products/search" state={{ search: searchData }} />
        navigate('/products/search', { state : { query : searchData}})
       
        // navigate(`/products/${SetSearchParams({q : searchData })}`);
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
