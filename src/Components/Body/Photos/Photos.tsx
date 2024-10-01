import './styles/styles.css'
import { photoData } from '../../../data/photoData'

function Photos() {
    return (
        <section className='photos-container'>
            {photoData.map((photo, i) => (
                <div key={i}>
                    <img src={photo.url} alt={photo.alt} />
                </div>
            ))}
        </section>
    )
}

export default Photos