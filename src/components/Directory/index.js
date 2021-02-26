import React from 'react';
import './styles.scss';

import ShopMen from './../../assets/shopMens.jpg';
import ShopWomen from './../../assets/shopWomens.jpg';

const Directory = props => {
    return (
       <div className="directory">
        <div className="wrap">
            <div
            className="item"
            style={{
                backgroundImage: `url(${ShopWomen})`
            }}
            >
            <a to="/search/womens">
                Shop Womens
            </a>
            </div>
            <div
            className="item"
            style={{
                backgroundImage: `url(${ShopMen})`
            }}
            >
            <a to="/search/mens">
                Shop Mens
            </a>
            </div>
        </div>
    </div>
    )
}

export default Directory;