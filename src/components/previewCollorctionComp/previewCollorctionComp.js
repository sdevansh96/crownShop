import React from 'react';
import './previewCollorctionComp.scss';
import CollectionItem from '../collection-item.component/collection-item.component';


const PreviewCollorctionComp = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className="preview">
            {items.filter((x, i) => i < 4).map(({ id, ...otherData }) => <CollectionItem
                key={id} {...otherData} />
            )}
        </div>
    </div>
);

export default PreviewCollorctionComp;