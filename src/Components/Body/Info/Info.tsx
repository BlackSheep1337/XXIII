import ImageIcon from '../../assets/Imagicon.png'
import './styles/styles.css'
import { infoData } from '../../../data/info'
import { MdVerified } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";



function Info() {
    return (
        <div>
            <div className='info-header'>
                <img className='picture' src={ImageIcon} alt="Profile" />
                <button className='button'>PROFILE PICTURE</button>
            </div>

            <div className='info-content'>
                    {infoData.map((op,i) => {
                        return (
                            <ul>
                                <li key={i}>
                                    <span>{op.option}</span>
                                    <div className='content-values'>
                                        <span className='value'>{op.value}</span>
                                        <span className='verified-symbol'>{op.option === 'Profile' && <MdVerified />}</span>
                                        <span><IoIosArrowForward /></span>
                                    </div>
                                </li>
                                <hr />
                            </ul>
                        )
                    })}
            </div>
        </div>
    )
}

export default Info