import React from 'react';
import SHOP_DATA from '../../helpers/shopData';
import './shop.scss';
import PreviewCollorctionComp from '../../components/previewCollorctionComp/previewCollorctionComp';



class ShopPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: SHOP_DATA
        }
    }
    render() {
        return <div className='shop-page'>
         {this.state.data.map(({id,...otherData})=>(
         <PreviewCollorctionComp
         key={id}
         {...otherData}
         />))}
        </div>
    }
}

export default ShopPage;