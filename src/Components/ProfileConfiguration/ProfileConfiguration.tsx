import './styles/styles.css'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdVerified } from "react-icons/md";

import ButtonImage from '../assets/Button.png';
import FooterButton from '../assets/FooterButton.png';



function ProfileConfiguration() {
    const name = 'Scarlet';
    const userName = 'scarlet.roses';

    return (
        <section className='config-container'>
            <form action="">
                <label htmlFor="">Name <span className='icon'><IoIosInformationCircleOutline /></span></label>

                <div className="input-icon-container">
                    <MdVerified className="input-icon" />
                    <input className='input-text' value={name} type="text" />
                </div>


                <label htmlFor="">Username<span className='icon'><IoIosInformationCircleOutline /></span></label>
                <input value={userName} type="text" />

                <div className='config-info'>
                    <p className='info'>In most cases, you'll able to change your name back to <span>{userName}</span> for another 14 days.</p>
                </div>
            </form>

            <div className='config-info'>
                <p>Profile<span className='icon'><IoIosInformationCircleOutline /></span></p>
                <p className='info'>https://roses.vip/<span>{userName}</span></p>
            </div>

            <div className='config-identity'>
                <p>Identity Verification <span className='icon'><MdVerified /></span></p>
                <span>Let's make sure nobody is trying to impersonate you.</span>
                <button>
                    <img src={ButtonImage} alt="" />
                </button>
            </div>

            <div className='config-footer'>
                <button><img src={FooterButton} alt="" /></button>
            </div>
        </section>
    )
}

export default ProfileConfiguration