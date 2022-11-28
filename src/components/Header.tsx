import React, { useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { Button } from './Button'

export const Header: React.FC = () => {
    const [searchData, setSearchData] = useState<string>("")

    const navigate = useNavigate();

    const searchEvent = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchData) {
            navigate('/products/search');
            sessionStorage.setItem("searchData", searchData);
        }

        if (searchData == "") {
            navigate('/products');
        }
    }

    const backToProducts = () => {
        navigate(`/products`);
    }

    const navigateAddProduct = () => {
        navigate(`/products/add`)
    }

    return (
        <div>
            <div className='displayFlex_center dupicate-head' style={{ gap: "10px" }}>
                <i className="fa-regular fa-shop" onClick={() => backToProducts()}></i>
                <a className='project_title' onClick={() => backToProducts()}>MY SHOPE</a>
            </div>
            <div className='displayFlex_spacebetween'>
                <div className='displayFlex_center title' style={{ gap: "10px" }}>
                    <i className="fa-regular fa-shop" onClick={() => backToProducts()}></i>
                    <a className='project_title' onClick={() => backToProducts()}>MY SHOPE</a>
                </div>
                <form action="" onSubmit={searchEvent}>
                    <div className='search_btn'>
                        <input type="text" value={searchData} onChange={(e) => setSearchData(e.target.value)} name="" id="" placeholder='search product' />
                        <span>
                            {/* <button type='submit'>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button> */}
                            <Button type="submit" title='' iTagClassName='fa-solid fa-magnifying-glass'/>
                        </span>
                    </div>
                </form>

                <div className='displayFlex_center'>
                    <div className='displayFlex_center gap_10'>
                        <button className='Catgories_btn' onClick={() => navigate(`/products/categories`)}>Catgories</button>
                        {/* <button className='displayFlex_center cart_button'>
                        <div><i className="fa-solid fa-cart-shopping"></i></div>
                        <div className='cartItems'></div>
                    </button> */}
                        <Button type="button" title='Add' className='addProduct' iTagClassName="fa-brands fa-product-hunt" navigateAddProduct={() => navigateAddProduct()} />
                        {/* <button className='addProduct' onClick={() => navigate(`/products/add`)}>Add <i className="fa-brands fa-product-hunt"></i></button> */}
                    </div>

                </div>
            </div>
        </div>
    )
}
