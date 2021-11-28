import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
        return (
            <div>
                <div className="card white darken-4 z-depth-0">
                    {/* <div className="card-content"> */}
                    {/* <h6 className="black-text">
                            <strong>НАВЫКИ ПРОГРАММИРОВАНИЯ</strong>
                        </h6> */}
                    {/* <hr /> */}
                    <div className="row pt">
                        <div className="col m6 s12">
                            <p className="black-text text lighten-3">Java</p>
                            <div className="progress grey">
                                <div className="determinate light-blue" style={{ width: '45%' }}></div>
                            </div>
                        </div>
                        <div className="col m6 s12">
                            <p className="black-text text lighten-3">C#</p>
                            <div className="progress grey">
                                <div className="determinate light-blue" style={{ width: '25%' }}></div>
                            </div>
                        </div>
                        <div className="col m6 s12">
                            <p className="black-text text lighten-3">Python</p>
                            <div className="progress grey">
                                <div className="determinate light-blue" style={{ width: '35%' }}></div>
                            </div>
                        </div>
                        <div className="col m6 s12">
                            <p className="black-text text lighten-3">React</p>
                            <div className="progress grey">
                                <div className="determinate light-blue" style={{ width: '20%' }}></div>
                            </div>
                        </div>
                        <div className="col m6 s12">
                            <p className="black-text text lighten-3">PostgreSQL</p>
                            <div className="progress grey">
                                <div className="determinate light-blue" style={{ width: '55%' }}></div>
                            </div>
                        </div>
                        <div className="col m6 s12">
                            <p className="black-text text lighten-3">HTML</p>
                            <div className="progress grey">
                                <div className="determinate light-blue" style={{ width: '65%' }}></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
