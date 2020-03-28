import React from 'react';
import './homepage.styles.scss'
import DirectorItem from '../../components/directoryComp/directoryComp';

const HomePageComp = props => (
    <div className='homepage'>
        <div className='directory-menu'>
            <DirectorItem/>
        </div>
    </div>

);

export default HomePageComp;