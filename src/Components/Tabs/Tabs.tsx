import React, { useState } from 'react';
import './styles/styles.css';
import Info from '../Body/Info/Info';
import Photos from '../Body/Photos/Photos';
import Preference from '../Body/Preference/Preference';
import { TabsEnum } from '../Enums/TabsEnum';


function Tabs(){
    const [activeTab, setActiveTab] = useState<TabsEnum>(TabsEnum.INFO); 
    return (
        <>
            <div className='tabs'>
                <button
                    className={`tab-button info ${activeTab === TabsEnum.INFO ? 'active' : ''}`}
                    onClick={() => setActiveTab(TabsEnum.INFO)}
                >
                    INFO
                </button>
                <button
                    className={`tab-button photos ${activeTab === TabsEnum.PHOTOS ? 'active' : ''}`}
                    onClick={() => setActiveTab(TabsEnum.PHOTOS)}
                >
                    PHOTOS
                </button>
                <button
                    className={`tab-button preferences ${activeTab === TabsEnum.PREFERENCES ? 'active' : ''}`}
                    onClick={() => setActiveTab(TabsEnum.PREFERENCES)}
                >
                    PREFERENCES
                </button>
            </div>

            <div className='tab-content'>
                {activeTab === TabsEnum.INFO && <Info />}
                {activeTab === TabsEnum.PHOTOS && <Photos />}
                {activeTab === TabsEnum.PREFERENCES && <Preference />}
            </div>
        </>
    );
}

export default Tabs;
