import React, { Component } from 'react';
import {Link} from 'gatsby';
import {FaCartArrowDown} from 'react-icons/fa'
import logoheader from '../../images/logo.svg'





export default class Navbar extends Component {

    state = {
        navbarOpen:false,
        css:"collapse navbar-collapse",
        links:[
           {
            id: 1,
            path:"/",
            text: "Home"
            },
        {
            id: 2,
            path:"/about",
            text:"About"
            },
        ]
    }
    navbarHandler = ()=>{
        this.state.navbarOpen?this.setState({navbarOpen:false, css:"collapse navbar-collapse"}):this.setState({navbarOpen:true, css:'collapse navbar-collapse show'})
    };
    render() {
        return (
            <nav className=" navbar navbar-expand-sm bg-light navbar-light ">
                <Link to="/" className="navbar-brand">
                <img src={logoheader}/>
                </Link>
                <button className="navbar-toggler" type="button" onClick={this.navbarHandler}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={this.state.css}>
                    <ul className="navbar-nav mx-auto"  >
                        {this.state.links.map(link =>{
                            return(

                                <li key={link.id} className="nav-item">
                                    <Link to={link.path} className="nav-link text-capitalizer">
                                        {link.text}
                                    </Link>
                                </li>
                            )
                        })}
                        <li className="nav-item ml-sm-5">
                            <FaCartArrowDown className="cart-icon" />
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
