import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import './default.css';
import logo_jpg from "../images/logo.jpg";

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                        {/*<NavbarBrand tag={Link} to="/">BookApp.React</NavbarBrand>*/}
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <div id="header">
                                <div className="tnb clearfix">
                                    <div className="max1200 clearfix">
                                        <ul className="clearfix">
                                            {/*<li><a className="icon_logout" href="/logout"></a></li>*/}
                                            {/*<li><a className="icon_my" href="/user/mypage"></a></li>*/}
                                            {/*<li><a className="icon_logout" href="/logout"></a></li>*/}
                                            {/*<li><a href="/admin/index">관리자 홈</a></li>*/}
                                            <li><a className="icon_login" href="/loginform"></a></li>
                                            <li><a className="icon_admin" href="/admin/loginform"></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="main_nav">
                                    <div className="max1200 clearfix">
                                        <img src={logo_jpg} alt="로고이미지"/>
                                        <div className="nav">
                                            <ul className="clearfix">
                                                <li><a href="/intro/main">아나스타 소개</a></li>
                                                <li><a href="/edu/guide">교육안내</a></li>
                                                <li><a href="/board/passer/list">합격자</a></li>
                                                <li><a href="/board/community/list">아나스타 소식</a></li>
                                                <li><a href="/board/notice/list">자료실</a></li>
                                                <li><a href="/user/mypage">마이페이지</a></li>
                                                {/*<li><a href="/join">회원가입</a></li>*/}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<ul className="navbar-nav flex-grow">*/}
                            {/*    <NavItem>*/}
                            {/*        <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>*/}
                            {/*    </NavItem>*/}
                            {/*    <NavItem>*/}
                            {/*        <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>*/}
                            {/*    </NavItem>*/}
                            {/*    <NavItem>*/}
                            {/*        <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>*/}
                            {/*    </NavItem>*/}
                            {/*</ul>*/}
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
