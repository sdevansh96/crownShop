import React from 'react';
import './from-input.scss';

const FromInput=({handlerChange,label,...otherData})=>(
    <div className='group'>
        <input className='form-input'
        onChange={handlerChange}
        {...otherData}
        />
        {label?<label className={`${otherData.value.length?'shrink':''} form-input-label`}>
            {label}
    </label>:null
    }
    </div>
);

export default FromInput;