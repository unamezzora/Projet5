import { useEffect, useState, useRef } from "react";
import '../../style/collapse.scss'
import ferme from '../../assets/ferme.svg'

function Collapse () {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className="collapse">
            <button className="collapse__btn" onClick={() => setIsOpen(false)}>
                <h1>Fiabilité</h1> 
                <img className='collapse__btn__ferme'  src={ferme} alt="logo" />
            </button>
            <p className="collapse__contenu">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </div>
    ) : (
        <button className="collapse__btn" onClick={() => setIsOpen(true)}>
            <h1>Fiabilité</h1>
            <svg className="collapse__btn__icon" height="30" width="30">
                <path stroke="none"  fill="#FFFFFF" d="m15.34013,10.43154c0.64151,-0.66942 1.68331,-0.66942 2.32492,0l9.85377,10.28226c0.6416,0.6694 0.6416,1.7566 0,2.426c-0.64151,0.6694 -1.68331,0.6694 -2.32482,0l-8.694,-9.07198l-8.69396,9.06658c-0.64153,0.6695 -1.68337,0.6695 -2.3249,0c-0.64153,-0.6694 -0.64153,-1.7565 0,-2.4259l9.85381,-10.28232l0.00517,0.00536z" />

                //d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z0 0 L25 50 L20 20 " d="M30 60 L45 35 L60 60"

            </svg>
        </button>
    )
}

 export default Collapse