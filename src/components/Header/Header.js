import React from 'react';
import hederLogo from '../../images/Logo.svg'
import './Header.css';

const Header = () => {
    return (
        <div>
            <img src={hederLogo} alt="" />
            <div>
            <nav className='nav-control'>
                <a href="/Shop">Shop</a>
                <a href="/OderReview"> OderReview</a>
                <a href="/ManageInvertory"> ManageInventory</a>
            </nav>
            </div>
            
        </div>
    );
};

export default Header;