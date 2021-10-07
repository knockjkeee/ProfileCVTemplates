import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
        return (
            <div>
                <div className="card light-blue darken-4 z-depth-0">
                    <div className="card-content">
                        <h6 className="white-text">
                            <strong>НАВЫКИ ПРОГРАММИРОВАНИЯ</strong>
                        </h6>
                        <hr />
                        <div className="row pt">
                            <div className="col m6 s12">
                                <p className="white-text text lighten-3">Java</p>
                                <div className="progress white">
                                    <div className="determinate grey" style={{ width: '45%' }}></div>
                                </div>
                            </div>
                            <div className="col m6 s12">
                                <p className="white-text text lighten-3">Python</p>
                                <div className="progress white">
                                    <div className="determinate grey" style={{ width: '35%' }}></div>
                                </div>
                            </div>
                            <div className="col m6 s12">
                                <p className="white-text text lighten-3">React</p>
                                <div className="progress white">
                                    <div className="determinate grey" style={{ width: '25%' }}></div>
                                </div>
                            </div>
                            <div className="col m6 s12">
                                <p className="white-text text lighten-3">HTML</p>
                                <div className="progress white">
                                    <div className="determinate grey" style={{ width: '65%' }}></div>
                                </div>
                            </div>
                            <div className="col m6 s12">
                                <p className="white-text text lighten-3">PostgreSQL</p>
                                <div className="progress white">
                                    <div className="determinate grey" style={{ width: '65%' }}></div>
                                </div>
                            </div>
                            <div className="col m6 s12">
                                <p className="white-text text lighten-3">MySQL</p>
                                <div className="progress white">
                                    <div className="determinate grey" style={{ width: '65%' }}></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
