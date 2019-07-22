import React, { Component } from 'react';

class ImageCard extends Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spansRows = Math.ceil(height / 10 );
        this.setState({ spans: spansRows });
    }

    render() {
        return (
          <li>
        		<a href={this.props.image.links.html}>
        			<img
                ref={this.imageRef}
                src={this.props.image.urls.regular}
                alt={this.props.image.alt_description}
              />
        		</a>
        		<p>
        			Photo by {this.props.image.user.name}
        			<a href={this.props.image.links.html}> See on Unsplash</a>
        		</p>
        	</li>
        )
    }
}

export default ImageCard;
