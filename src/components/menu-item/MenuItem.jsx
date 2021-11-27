import React from "react";
//import { withRouter } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./menuitem.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
    const handleClick = () => {
        history.push(`${match.url}${linkUrl}`);
    };
    return (
        <div className={`${size} menu-item`} onClick={handleClick}>
            <div
                className="background-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    );
};

export default withRouter(MenuItem);
//export default MenuItem;
