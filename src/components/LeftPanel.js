import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

import Logo from '../assets/images/wow_logo.png';
import ProfileImg from '../assets/icon/profile.png'


export default function LeftPanel() {
    return (
        <>
            <Link to="/home"><div className="d-flex justify-content-center"><img className="logo-small" src={Logo} alt="" /></div></Link>
            <div className="d-flex justify-content-center"><img className="profile-img" src={ProfileImg} alt="" /></div>
            <div className="d-flex justify-content-center profile-name">Egi Ganteng</div>
            <div className="d-flex justify-content-center profile-status">Not Subscribed Yet </div><hr />
            
        </>
    )
}
