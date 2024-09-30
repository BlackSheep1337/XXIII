import React from 'react'
import ImageIcon from '../../assets/Imagicon.png'

function Info() {
    return (
        <div>
            <div className='info-title'>
                <img src={ImageIcon} alt="Profile picture" />
                <button>PROFILE PICTURE</button>
            </div>

            <div className='info-content'>
                <ul>
                    <li>
                        Profile
                    </li>
                    <li>
                        Bio
                    </li>
                    <li>
                        Gender
                    </li>
                    <li>
                        Age
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Info