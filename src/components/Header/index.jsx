import { Link } from 'react-router-dom';
import logo from '../../assets/LOGO.svg';
import "../../style/header.scss"

function Header() {
    return (
        <nav className='navbar'>
            <img className='navbar__logo' src={logo} alt="logo" />
            <div>
                <Link className='navbar__link' to='/'>Accueil</Link>
                <Link className='navbar__link' to='/about'>A Propos</Link>
            </div>

        </nav>
    )
}

export default Header