import './styles/styles.css'
import { BiSolidPlaneAlt } from "react-icons/bi";
import { HiLanguage } from "react-icons/hi2";
import { IoIosArrowForward } from 'react-icons/io';
import Rose from '../../assets/roses-default-transparent.png';
import Toggle from '../../assets/toggle.png';



function Preference() {
    return (
        <section className='preference-container'>
            <form>
                <label className='location' htmlFor="location">Location</label>
                
                
                <div className="input-icon-container">
                    <BiSolidPlaneAlt className="input-icon" />
                    <input id="location" placeholder="Dubai, UAE" type="text" />
                </div>

                <label htmlFor="language">Language</label>
                <div className="input-icon-container">
                    <HiLanguage className="input-icon" />
                    <input placeholder='Portuguese, English' id="language" type="text" />
                </div>
            </form>

        <div className='connection-container'>
            <ul>
                <li>
                    <span>Connect & Chat</span>
                    <div className='content-values'>
                        <span>Free</span>
                        <span><IoIosArrowForward /></span>
                    </div>
                </li>
                <hr />

                <li>
                    <span>Photos</span>
                    <div className='content-values'>
                        <span>50</span>
                        <span><IoIosArrowForward /></span>
                    </div>
                </li>
                <hr />

                <li>
                    <span>Packs</span>
                    <div className='content-values'>
                        <span>100</span>
                        <span><IoIosArrowForward /></span>
                    </div>
                </li>
            </ul>
            <button>ADD CONTENT</button>
            </div>
            
            <div className='footer-container'> 
                <img src={Rose} alt="Logo" />
                <div>
                    <p>Allow Requests</p>
                    <span>Accept roses requests from everyone</span>
                </div>
                <button><img src={Toggle} alt="" /></button>
            </div>
        </section>
    )
}

export default Preference;
