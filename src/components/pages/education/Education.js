import React, { Component } from 'react'

export default class Education extends Component {
    render() {
        return (
            <div>
                <div className="card z-depth-0">
                    <div className="card-content">
                        <h6>
                            <strong>
                                <i className="fas fa-graduation-cap"></i>  ОБРАЗОВАНИЕ
                            </strong>
                        </h6>
                        <hr />
                        <div className="row mt">
                            <div className="col s12">
                                <blockquote className="content-right">
                                    <h6 className="no-pad mt-bottom">
                                        <strong>Бакалавриат</strong>
                                        <span>2002 - 2007</span>
                                    </h6>
                                    <p className="pt">
                                        <strong>Учебное заведение</strong> : УРАО - Университет Российской Академии Образования<br />
                                        <strong>Факультет</strong> : Информационных технологий<br />
                                        <strong>Специальность</strong> : Математик, системный программист
                                    </p>
                                </blockquote>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
