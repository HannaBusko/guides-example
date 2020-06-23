import React, { Component, Fragment } from 'react';
import { Segment } from 'semantic-ui-react'
//
class AboutBlock extends Component {

    render() {
        const { image_main, image_small, title, children } = this.props;
        if (!image_main) return;
        return (
            <Fragment>
                <div className="content-main-image"
                    style={{
                        background: `url(${image_main.url})`
                    }} >
                    <div> {title}</div>
                </div>
                <div className="content-wrapper about-wrapper">
                    <Segment>
                        <img src={image_small.src} alt={image_small.alt} />
                    </Segment>
                    <div  className="content-text">
                        {children}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default AboutBlock;
