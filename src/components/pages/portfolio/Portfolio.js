import React, { Component } from 'react'
import { dataExp } from '../../../components/data'
import SATdesc from '../../../components/pages/skillsAndTechnology/SATdesc'

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <div className="card z-depth-0">
                    <div className="card-content social">
                        <h6>
                            <strong>
                                <i className="fas fa-laptop-code"></i>  ОПЫТ В ПРОГРАММИРОВАНИИ
                            </strong>
                        </h6>
                        <hr />
                        <div className="row mt">
                            <div className="col s12">
                                <blockquote className="content-right">
                                    <p className="pt">
                                        <SATdesc title="Подробности" name={dataExp[4].skills} />
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div >
                </div >
            </div>
        )
    }
}
