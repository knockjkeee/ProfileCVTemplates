import React, { Component } from 'react'
import Popup from 'reactjs-popup';


export default class Modal extends Component {
    render() {
        return (
            <div>
                <Popup trigger={<button className="button"> Open Modal </button>} modal>
                    <div className="header center"> Modal Title </div>
                    <div className="content">
                        <span> Modal content </span>
                    </div>
                </Popup>
            </div>
        )
    }
}
