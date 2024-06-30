import { Link } from 'react-router-dom'
import erreur404 from '../../assets/404.svg'
import '../../style/error.scss'

function Error() {
  return (
    <div className="error">
      <img className="error__img" src={erreur404} alt="404" />
      <div className="error__title">
        Oups! La page que <span>vous demandez n'existe pas.</span>
      </div>
      <Link className="error__link" to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  )
}

export default Error
