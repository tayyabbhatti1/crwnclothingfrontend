import React, { Component } from "react";

import MenuItem from "../menu-item/menu-item.component";

import './directory.styles.scss';


class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'HATS',
                    ImageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id : 1
                },
                {
                    title: 'JACKETS',
                    ImageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id : 2
                },
                {
                    title: 'SNEAKERS',
                    ImageUrl:  'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id : 3
                },
                {
                    title: 'WOMENS',
                    ImageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id : 4

                },
                {
                    title: 'MENS',
                    ImageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id : 5
                },

            ]
        }
    }
    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({title, ImageUrl, id, size}) => (
                    <MenuItem key={id} title = {title} ImageUrl = {ImageUrl} size ={size}/>
                ))}
            </div>
        )
    }
}

export default Directory;