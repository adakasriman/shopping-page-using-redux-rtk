import React, { useEffect, useState } from 'react';
import { useSerchFilterQuery } from '../services/productsApi';
import { useNavigate, useLocation, useSearchParams, } from 'react-router-dom';



type Props = {
    getFilterData: any
}

type FormData = {
    limit: number
    skip: number
    select: string,
    price: number,
}

export const Filters: React.FC<Props> = ({ getFilterData }) => {
    const [searchParams, SetSearchParams] = useSearchParams();
    const [showAndhide, setShowAndhide] = useState<boolean>(false);
    const [formData, setFormData] = useState<any>({
        limit: 0,
        skip: 0,
        select: "",
        price: 0,
    });


    const { data, error, isLoading, isFetching, isSuccess } = useSerchFilterQuery(formData);

    useEffect(() => {
        console.log(data);
        
        if (formData.limit == "" || 0) {
            debugger
            getFilterData(null);
        } else if (formData.limit) {
            debugger
            getFilterData(data);
        }
    }, [data])


    useEffect(() => {

        if (showAndhide) {
            SetSearchParams({ limit: formData?.limit, skip: formData?.skip, select: formData?.select, price: formData?.price });
        } else {
            SetSearchParams({});
        }

    }, [formData, showAndhide])


    function chaneEvent(e: React.FormEvent<HTMLInputElement>) {
        e.preventDefault();
        setFormData({ ...formData, [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value }); //here assiging the value to name attribute
    }

    const filterHandular = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);

    }

    const filterToggle = () => {
        setShowAndhide(!showAndhide);
        if (showAndhide == false) {
            setFormData({
                limit: 0,
                skip: 0,
                select: "",
                price: 0,
            })
        }else{
            getFilterData(null);
        }
       
    }



    return (
        <div>
            {
                showAndhide && <div className='container'>
                    <h4 className=""><span>Filters</span></h4>
                    <form action="" onSubmit={(e) => filterHandular(e)} className="displayFlex_center gap_20">
                        <div className="item displayFlex_center gap_5">
                            <div>Limit:</div>
                            <input type="number" value={formData.limit} onChange={chaneEvent} name="limit" placeholder='limit' />
                        </div>
                        <div className="item displayFlex_center gap_5">
                            <div>Skip:</div>
                            <input type="number" value={formData.skip} onChange={chaneEvent} name="skip" placeholder='skip' />
                        </div>
                        <div className="item displayFlex_center gap_5">
                            <div>Title:</div>
                            <input type="text" value={formData.select} onChange={chaneEvent} name="select" placeholder='title' />
                        </div>
                        <div className="item displayFlex_center gap_5">
                            <div>Price:</div>
                            <input type="text" value={formData.price} onChange={chaneEvent} name="price" placeholder='price' />
                        </div>
                    </form>
                </div>
            }

            <button className='filter_button' onClick={() => filterToggle()}>
                <i className="fa-solid fa-filter"></i>
            </button>
        </div>
    )
}
