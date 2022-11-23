import React, { useState } from 'react';

export const Filters: React.FC = () => {

    const [formData, setFormData] = useState({
        limit: 0,
        skip: 0,
        select: "",
        price: "",
    });

    function chaneEvent(e: React.FormEvent<HTMLInputElement>) {
        e.preventDefault();
        setFormData({ ...formData, [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value }); //here assiging the value to name attribute

    }

    const filterHandular = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        debugger

    }

    return (
        <div className='container'>
            <h4 className=""><span>Filters</span></h4>
            <form action="" onSubmit={(e) => filterHandular(e)} className="displayFlex_center gap_20">
                <div className="item displayFlex_center gap_5">
                    <div>Limit:</div>
                    <input type="number" onChange={chaneEvent} name="limit" placeholder='limit' />
                </div>
                <div className="item displayFlex_center gap_5">
                    <div>Skip:</div>
                    <input type="number" onChange={chaneEvent} name="skip" placeholder='skip' />
                </div>
                <div className="item displayFlex_center gap_5">
                    <div>Title:</div>
                    <input type="text" onChange={chaneEvent} name="select" placeholder='title'/>
                </div>
                <div className="item displayFlex_center gap_5">
                    <div>Price:</div>
                    <input type="text" onChange={chaneEvent} name="price" placeholder='price' />
                </div>
            </form>
        </div>
    )
}
