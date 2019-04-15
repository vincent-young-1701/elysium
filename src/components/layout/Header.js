import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="navbar navbar-expand-sm navbar-dark bg-info mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">Elysium Hotel</Link>
        <nav>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/listings" className="nav-link">
                <i className="fas fa-bed">&nbsp;Book</i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
