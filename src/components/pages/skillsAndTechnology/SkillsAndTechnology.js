import React, { Component } from 'react'
import SkillsDes from '../../../components/pages/skills/SkillsDes'
import { dataExp } from '../../../components/data'

export default class SkillsAndTechnology extends Component {
    render() {
        return (
            <div>
                <div className="card z-depth-0">
                    <div className="card-content social">
                        <h6>
                            <strong>
                                <i className="fas fa-laptop-code"></i>  НАВЫКИ И ТЕХНОЛОГИИ
                            </strong>
                        </h6>
                        <hr />
                        <div className="row mt">
                            <div className="col s12">
                                <blockquote className="content-right">
                                    <p className="pt">

                                        <SkillsDes title="Подробности" name={dataExp[4].skills} />
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
