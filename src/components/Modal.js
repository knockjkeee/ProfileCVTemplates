import React, { Component } from 'react'
import Popup from 'reactjs-popup';


export default class Modal extends Component {
    render() {
        return (
            // <div>
            <Popup trigger={<button className=""> {this.props.title} </button>} modal>
                <div className="row"
                    style={{
                        "maxHeight": "100vh",
                        "overflowY": "auto"
                    }}
                >
                    <div className="col s12 m12 l14 white sameHeight">
                        <div className="card z-depth-0">
                            <div className="card-content social">
                                <div className="row mt">
                                    <div className="col s12">
                                        <blockquote className="content-right">
                                            {/* <div className="header center"> Modal Title </div> */}
                                            <div className="content">

                                                <div>{this.props.name} </div>

                                            </div>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Popup >
            // </div >
        )
    }
}
