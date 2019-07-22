import React, { Component } from 'react';
import ImageCard from './ImageCard';


class ImageList extends Component {

    render() {
        return (
            <ul className="image__list">
            {this.props.foundImages.map(img => {
                return <ImageCard key={img.id} image={img} />
            })}
            </ul>
        )
    }
}

export default ImageList;
