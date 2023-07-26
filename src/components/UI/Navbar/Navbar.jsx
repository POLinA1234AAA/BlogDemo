import classes from './Navbar.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MyButton from "../button/MyButton";
import React, {useContext} from 'react';


import {AuthContext} from "../../../context";
const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <div className="navbar">
            <MyButton onClick={toggleNavbar} style={{padding :'0 1.3em'}}>+</MyButton>
            {isNavbarOpen && (
                <>
                    <MyButton onClick={logout}>Выйти</MyButton>
                    <div className="navbar__links">
                        <Link  className={classes.e} to="/about">О сайте</Link>
                        <Link  className={classes.e} to="/posts">Посты</Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Navbar;
