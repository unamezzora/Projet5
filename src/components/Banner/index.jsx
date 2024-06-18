import imageBanner from '../../assets/imageBanner.svg'
import '../../style/banner.scss'

function Banner() {
    return (
        <div className='banner'>
        
            <img src={imageBanner} className='banner__img' alt="Une cote rocheuse" />
           
            <div className='banner__title'>
                <h1 >Chez vous, partout et ailleurs</h1>
            </div>
        </div>
        
    )
}

export default Banner



