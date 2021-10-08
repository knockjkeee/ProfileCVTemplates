import React, { Component } from 'react'
import Modal from '../../../components/Modal'

export default class Experiences extends Component {
    render() {

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
                                        <strong><Modal title="Краткое описание деятельности: -> ..." name='{asdasdse}' />

                                        </strong>
                                        <br />
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
                                        <strong>Краткое описание деятельности</strong> : Техническая дирекция. Проработка гос. контрактов (автоматизированные системы): Фотовидеофиксация, Весогабаритный контроль, Безопасный город, Интеллектуальные транспортные системы, Комплексные системы безопасности (СКУД, видеонаблюдение, Системы охранной сигнализации, Системы пожарной сигнализации, Системы речевого и аварийного оповещения). Декомпозиция технического задания, выбор вендоров (СПО, периферия), формирование предварительного бюджета, контроль проектирования. На всем цикле проработки объекта, прямая, при возможности, коммуникация с Заказчиком, выявление потребностей, определение слабых мест в техническом задании.<br />
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
                                        <strong>Краткое описание деятельности</strong> : ИТ департамент. Реализация проектов внедрения комплексной системы фотовидеофиксации. Стройка, установка комплексов фотовидеофиксации. География: Волгоград, Чита, Омск.<br />
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
                                        <strong>Краткое описание деятельности</strong> : Проектный отдел.Реализация проекта GPON г. Москвы. Проектирование, контроль исполнения контрактов. Заказчик Ростелеком.<br />
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
