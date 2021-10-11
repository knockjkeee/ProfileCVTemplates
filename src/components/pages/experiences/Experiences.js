import React, { Component } from 'react'
import Modal from '../../../components/Modal'
import { dataExp } from '../../../components/data'

export default class Experiences extends Component {
    render() {
        // console.log(data.data[0])
        // console.log(dataExp[0].rostelematika)
        return (
            <div>
                <div className="card z-depth-0">
                    <div className="card-content social">
                        <h6>
                            <strong>
                                <i className="fas fa-tools"></i>  ПРОФЕССИОНАЛЬНЫЙ ОПЫТ
                            </strong>
                        </h6>
                        <hr />
                        <div className="row mt">
                            <div className="col s12">
                                <blockquote className="content-right">
                                    <h6 className="no-pad mt-bottom">
                                        <strong>Главный инженер проекта</strong>
                                        <span>2020 - по настоящее время</span>
                                    </h6>
                                    <p className="pt">
                                        <strong>Компания</strong> : ООО «Ростелематика»<br />
                                        <strong>Краткое описание деятельности :
                                        </strong> <Modal title="Подробности" name={dataExp[0].rostelematika} />
                                    </p>

                                </blockquote>
                            </div>
                        </div>
                        <div className="row mt">
                            <div className="col s12">
                                <blockquote className="content-right">
                                    <h6 className="no-pad mt-bottom">
                                        <strong>Инженер/Бизнес аналитик/Системный архитектор</strong>
                                        <span>2015 - 2020</span>
                                    </h6>
                                    <p className="pt">
                                        <strong>Компания</strong> : ООО «ТехноСерв АС»<br />
                                        <strong>Краткое описание деятельности :
                                        </strong> <Modal title="Подробности" name={dataExp[1].ts} />
                                    </p>

                                </blockquote>
                            </div>
                        </div>
                        <div className="row mt">
                            <div className="col s12">
                                <blockquote className="content-right">
                                    <h6 className="no-pad mt-bottom">
                                        <strong>Ведущий инженер</strong>
                                        <span>2015 - 2015</span>
                                    </h6>
                                    <p className="pt">
                                        <strong>Компания</strong> : ООО «ЭйТи Сервис»<br />
                                        <strong>Краткое описание деятельности :
                                        </strong> <Modal title="Подробности" name={dataExp[2].ITServ} />
                                    </p>

                                </blockquote>
                            </div>
                        </div>
                        <div className="row mt">
                            <div className="col s12">
                                <blockquote className="content-right">
                                    <h6 className="no-pad mt-bottom">
                                        <strong>Ведущий инженер</strong>
                                        <span>2014 - 2015</span>
                                    </h6>
                                    <p className="pt">
                                        <strong>Компания</strong> : ООО «Глобал Мультисервис»<br />
                                        <strong>Краткое описание деятельности :
                                        </strong> <Modal title="Подробности" name={dataExp[3].MultyServ} />
                                    </p>

                                </blockquote>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        )
    }
}
