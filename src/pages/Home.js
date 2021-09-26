import React, { useState, useEffect } from 'react';
import '../index.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import Banner from '../assets/images/banner.png'
import UserIcon from '../assets/icon/user.png';
import SubscribeIcon from '../assets/icon/subscribe.png';
import LogoutIcon from '../assets/icon/logout.png';

import BookList from '../components/BookList';
import LeftPanel from '../components/LeftPanel';
import ModalBeforeSubscribe from '../components/modals/ModalBeforeSubscribe';


function Home() {

// useEffect(() => {
//     console.log(loginState);
//     });

    return (
        <div className="body-afterLogin ps-5 pe-5">
        <Container fluid>
            <Row>
                <Col sm={3}>
                    <LeftPanel />
                    <div className="mt-5 mb-5"><Link to="/profile"><span className="font-left"><img className="me-3 align-top" src={UserIcon} alt="" />Profile</span></Link></div>
                    <div className="mb-5"><Link to="/subscribe"><span className="font-left"><img className="me-2 align-top" src={SubscribeIcon} alt="" />Subscribe</span></Link></div><hr />
                    <div className="mt-5"><Link to="/"><span className="font-left"><img className="me-3 align-top" src={LogoutIcon} alt="" />Logout</span></Link></div>
                </Col>
                <Col sm={9}>
                    <div><img className="banner-img mt-5" src={Banner} alt="" /></div>
                    <div className="list-book-title ms-3 mb-5">List Book</div>
                    <div className="ms-3 mb-5"><BookList /></div>
                </Col>
            </Row>
        </Container>  
        </div>
    )
}

export default Home;