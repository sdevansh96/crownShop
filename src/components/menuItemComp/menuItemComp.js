import React from 'react';
import './menuItemStyles.scss';
import {withRouter} from 'react-router-dom';


const MenuItemComp = props => (
    <div className={`${props.size} menu-item`} > 
    <div style={{backgroundImage:`url(${props.img})`}} className="background-image"/>
        <div className='content'>
            <h1 className='title'>{props.heading}</h1>
            <span className='subtitle'>Shop now</span>
        </div>
    </div>
)

export default withRouter(MenuItemComp);