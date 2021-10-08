import React, { Component } from 'react'
import Popup from 'reactjs-popup';


export default class Modal extends Component {
    render() {
        return (
            <div>
                <Popup trigger={<p className=""> {this.props.title} </p>} modal>
                    <div className="row">
                        <div className="col s12 m12 l8 white sameHeight">
                            <div className="card z-depth-0">
                                <div className="card-content social">
                                    <div className="row mt">
                                        <div className="col s12">
                                            <blockquote className="content-right">
                                                {/* <div className="header center"> Modal Title </div> */}
                                                <div className="content">
                                                    <span> Modal content {this.props.name} </span>
                                                </div>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Popup >
            </div >
        )
    }
}
