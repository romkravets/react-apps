import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions';
import { selectCartItemsCount } from './../../redux/Cart/cart.selectors';
import './styles.scss';

import Logo from './../../assets/logo.png';

const mapState = (state) => ({
    currentUser: state.user.currentUser,
    totalNumCartItms: selectCartItemsCount(state)
});

const Header = props => {
    const { currentUser, totalNumCartItms } = useSelector(mapState);
    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(signOutUserStart());
    }
    
    return (
        <header className="header">
            <div className="wrap">
                 <div className="logo">
                 <Link to="/"><img src={Logo} alt="SimpleTut LOGO" /></Link>
                </div>

                <nav>
                {/* className={`mainMenu ${activeMenu ? 'active' : ''}`} */}
                    <ul>
                        <li>
                        <Link to="/">
                            Home
                        </Link>
                        </li>
                        <li>
                        <Link to="/search">
                            Search
                        </Link>
                        </li>
                    </ul>
                </nav>


                <div className="callToActions">

                  <ul>
                    <li><Link to="/cart">Your cart ({totalNumCartItms})</Link></li>

                    {currentUser && [
                        <li><Link to="/dashboard">My Account</Link></li>,
                        <li><span onClick={() => signOut()}>LogOut</span></li>
                    ]}
                    </ul>

                    <ul>
                      {!currentUser && [
                        <li><Link to="/registration">Register</Link></li>,
                        <li><Link to="/login">Login</Link></li>
                        ]}
                    </ul>

                </div>
            </div>
        </header>
    )
}

Header.defaultProps = {
    currentUser: null
};



export default Header;