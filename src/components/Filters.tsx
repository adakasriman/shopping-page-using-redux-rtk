import React from 'react';

export const Filters: React.FC = () => {
    return (
        <div>
            <h4 className="">Filters</h4>
            <form action="">
                <div className="item displayFlex_center">
                    <div>Limit</div>
                    <input type="number" />
                </div>
                <div className="item displayFlex_center">
                    <div>Skip</div>
                    <input type="number" />
                </div>
                <div className="item displayFlex_center">
                    <div>Limit</div>
                    <input type="text" />
                </div>
                <div className="item displayFlex_center">
                    <div>Limit</div>
                    <input type="text" />
                </div>
                <button type="submit">find</button>
            </form>
        </div>
    )
}
