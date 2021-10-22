import React, { Component } from 'react'
import Popup from 'reactjs-popup';

export default class SkillsDes extends Component {
    render() {
        return (
            <Popup trigger={<button className=""> {this.props.title} </button>} modal>
                <div className="row">
                    <div className="col s12 m12 l14 white sameHeight">
                        <div className="card z-depth-0">
                            <div className="card-content social">
                                <div className="row"
                                    style={{
                                        "maxHeight": "100vh",
                                        "overflowY": "auto"
                                    }}
                                >
                                    <div className="col s12">
                                        <blockquote className="content-right">
                                            {/* <div className="header center"> Modal Title </div> */}
                                            <div className="content">
                                                <strong>Языки программирования (общий уровень Junior)</strong>: Java (Spring Boot, Spring MVC, Spring Data, Spring Security, Spring Web Services, Spring Cloud), JavaScript (React), Python <br />< strong > Система контроля версий</strong> : Git < br /><strong>Контейнеризация</strong> : Docker < br />    <strong>Базы данных</strong> : MySQL, PostgreSQL < br />    <br /><strong>Личные качества</strong> : Нацеленность на результат.Умение принимать решения.Исполнительность.Находчивость.Техническая грамотность < br />    <strong>Дополнительные сведения</strong> : Иностранный язык – Английский, технический уровень.Водительское удостоверение категория – B Готовность к командировкам    < br />

                                            </div>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Popup >
        )
    }
}
