import { NavLink } from 'react-router-dom'
import logo from '../../assets/LOGO.svg'
import './header.scss'

function Header() {
  return (
    <nav className="navbar">
      <img className="navbar__logo" src={logo} alt="logo" />
      <div>
        <NavLink
          className="navbar__link"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className="navbar__link"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
          to="/about"
        >
          A Propos
        </NavLink>
      </div>
    </nav>
  )
}

export default Header
