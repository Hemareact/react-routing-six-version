import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to= "/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    
                </ul>
            </nav>
        </header>

        <section>
            <h2>Welcome to Home Page</h2>
        </section>
    </div>
  )
}
