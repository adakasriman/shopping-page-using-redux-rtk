import React from "react";


interface Props {
    content: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
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

