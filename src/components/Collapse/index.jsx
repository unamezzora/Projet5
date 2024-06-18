import { useState } from "react";
import PropTypes from 'prop-types'
import '../../style/collapse.scss'

function Collapse ({ collapseTitle, collapseContenu }) {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className="collapse">
            <div className="collapse__title">
                <h1>{collapseTitle} </h1>
                <button className="collapse__title__btn" onClick={() => setIsOpen(false)}>
                    <svg className="collapse__title__btn--ouvert" viewBox="-6 0 36 15">
                        <path stroke="none"  fill="#FFFFFF" viewBox="0 0 10 16" d="m13.2103,13.8522c-0.6694,0.6694 -1.7565,0.6694 -2.426,0l-10.28224,-10.28232c-0.66942,-0.66942 -0.66942,-1.75656 0,-2.42598c0.66942,-0.66942 1.75656,-0.66942 2.42598,0l9.07196,9.072l9.072,-9.06664c0.6694,-0.66942 1.7565,-0.66942 2.4259,0c0.6695,0.66942 0.6695,1.75656 0,2.42597l-10.2822,10.28227l-0.0054,-0.0053z" />
                    </svg>     
                </button>
            </div>
            <p className="collapse__contenu">{collapseContenu}</p>
        </div>
    ) : (
        <div className="collapse">
            <div className="collapse__title">
                <h1>{collapseTitle}</h1>
                <button className="collapse__title__btn" onClick={() => setIsOpen(true)}>
                    <svg className="collapse__title__btn--ferme"
                    viewBox="-6 0 36 15">
                        <path stroke="none"  fill="#FFFFFF" d="m13.2103,13.8522c-0.6694,0.6694 -1.7565,0.6694 -2.426,0l-10.28224,-10.28232c-0.66942,-0.66942 -0.66942,-1.75656 0,-2.42598c0.66942,-0.66942 1.75656,-0.66942 2.42598,0l9.07196,9.072l9.072,-9.06664c0.6694,-0.66942 1.7565,-0.66942 2.4259,0c0.6695,0.66942 0.6695,1.75656 0,2.42597l-10.2822,10.28227l-0.0054,-0.0053z" />
                    </svg>
                </button>
            </div>    
        </div>
        
    )
}

Collapse.propType = {
    collapseTitle: PropTypes.string.isRequired,
    collapseContenu: PropTypes.string.isRequired,
}

 export default Collapse