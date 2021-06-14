import Link from 'next/Link';
import React from 'react';
import { logoutUser } from '../lib/auth';

const Layout = ({ title, children, auth }) => {
        const { user= {} } = auth || {};

return (
        <div className="root">
                <nav className="navbar">
                        <span>Welcome, <strong>{user.name || "Guest"}</strong></span>

                        <div>
                                <Link href="/">
                                        <a>Home</a>
                                </Link>

                                {user.email ? (
                                        //auth navigation
                                        <React.Fragment>
                                <Link href="/profile">
                                        <a>Profile</a>
                                </Link>
                                <button onClick={logoutUser}>Logout</button>
                                </React.Fragment>
                                ) : (
                                //unAuth navigation
                                <Link href="/login">
                                        <a>Login</a>
                                </Link>
                                )
                                }
                        </div>
                </nav>
                        <h1>{title}</h1>
                         {children}

                         <style jsx>{`
                         
.root {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-family: Arial;
}

.navbar {
        width: 100%;
        display: flex;
        justify-content: space-around;
}

a {
        margin-right: 0.5em;
        text-decoration: none;
        color: #808080; 
}

button {
        background: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        border-style: none;
        color: #808080;
}

a:hover, button:hover {
        color: black;               
}

h1 {
        color: #4A96A8;
}

                      `}</style>        
        </div>
)};

export default Layout;