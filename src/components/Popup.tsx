import React from "react";


interface Props {
    content: any,
    handleClose: any
}


export const Popup: React.FC<Props> = ({ content, handleClose }) => {

    return (
        <div className="popup-box">
            <div className="box">
                <>
                    <span className="close-icon" onClick={handleClose}>x</span>
                    {content}
                </>
            </div>
        </div>
    );
}

