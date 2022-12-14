
import React,{Component} from "react";
import './shop.style.scss'

import CollectionPreview from "../../components/collectionpreview/collection-preview.component";

import SHOP_DATA from './shopdata';


class ShopPage extends Component {

    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }
    render(){
        const {collections} = this.state;
        return(
            <div className="shop-page">
               {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
               }
            </div>
        );
    }

}

export default ShopPage;