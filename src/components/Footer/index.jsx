import logoNoir from '../../assets/LOGO_bl.svg'
import '../../style/footer.scss'

function Footer() {
    return (
        <div className='footer'>
            <img className='footer__logo' src={logoNoir} alt='Logo' />
            <div className='footer__title'>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    )
}
 export default Footer