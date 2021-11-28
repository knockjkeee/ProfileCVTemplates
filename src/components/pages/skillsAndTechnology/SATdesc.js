import React, { Component } from 'react'
import Popup from 'reactjs-popup';

export default class sATdesc extends Component {
    render() {
        return (
            <Popup trigger={<button className="button"> {this.props.title} </button>} modal>
                <div className="row" style={{
                    "maxHeight": "100vh",
                    "overflowY": "auto"
                }}>
                    <div className="col s12 m12 l14 white sameHeight">
                        <div className="card z-depth-0">
                            <div className="card-content social">
                                <div className="row mt">
                                    <div className="col s12">
                                        <blockquote className="content-right">
                                            {/* <div className="header center"> Modal Title </div> */}
                                            <div className="content" style={{
                                                // "fontSize": "0.9em",
                                                // "overflowY": "scroll"
                                            }}>

                                                Программирование изучаю самостоятельно  c 2017 по настоящее время. <br />
                                                <br />
                                                Программа обучения сложилась в 4 основных этапа:<br />
                                                1.	Старт изучения. Обучение на интерактивных платформах, таких как javarush.<br />
                                                2.	Дополнительная нагрузка. Подключение теории, книги:<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;•	Кей Хорстманн, Гари Корнелл, Java 2. Библиотека профессионала. Том 1. Основы; <br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;•	Кей Хорстманн, Гари Корнелл, Java 2. Библиотека профессионала. Том 2. Расширенные средства программирования;<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;•	Брюс Эккель, Философия Java;<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;•	Герберт Шилдт, Java 8 Полное руководство, девятое издание;<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;•	Роберт Мартин, Чистый код;<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;•	Эрик Фримен, Элизабет Робсон, Head First Паттерны проектирования;<br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;•	Фелипе Гутьеррес, Spring Boot 2 Лучшие практики для профессионалов<br />
                                                3.	Постановка целей и реализация. Просьба друзей, погруженных в профессию, сформулировать и поставить задачу.
                                                Первые наброски чего-то работающего: https://github.com/knockjkeee/company_web_servlet  (попытка написать мультипликатор,  акцентируя свое внимание на сервлетах)<br />
                                                4.	Расширение кругозора. Изучение новых технологий, экосистема Spring, Spring Cloud, WebSocket, работа с БД, Визуализация через templates (freemarker, mustache). Востребованные технологии черпал с ресурсов по подбору персонала.
                                                <br /><br />
                                                В силу загрузки на постоянном месте работы, погружение в процесс обучения иногда носил «рваный» характер. Были и продолжительные паузы, и преодолевание «плато». Так же были моменты, когда имело место отступление от выбранного направления, на другие языки и технологии, в части языка Python, в части технологий machine learning, computer vision, web scraping.

                                                На предыдущем месте работы, Техносерв, удалось решить, в качестве факультативной, но в рамках реального прикладного проекта с юзеркейсом, небольшую задачу, в результате дополнительно расширился кругозор в применении технологий.<br />
                                                <br />
                                                Подробнее о задаче:<br />
                                                Реализован прототип микросервисов информирования ответственных лиц по посещаемости учебного заведения (Колледж).
                                                Основной упор был на контроль входа (оценка воровства карт доступа) и выхода (прогулов) учеников в/из учебного заведении. Сбор данных с турникетов СКУД (база данных), и системы распознавания лиц ISS (websocket) в режиме реального времени с последующей обработкой и структурировании информации.
                                                <br /><br />
                                                Используемые технологии: Spring Boot, Spring MVC, Spring Data JPA, Websocket, Spring Cloud Netflix Eureka, Spring Cloud Netflix Zuul.<br />
                                                База данных: Postgresql, MySQL (база колледжа).<br />
                                                Мобильная разработка: Flutter apk.<br />
                                                Деплой проекта был выполнен на сервер колледжа.<br />

                                                Github - https://github.com/knockjkeee/school_control &nbsp;&nbsp;
                                                <a href="https://github.com/knockjkeee/school_control" target="blank">
                                                    <i className="fab fa-github-square fa-2x"></i>
                                                </a> <br /><br />
                                                Еще пробовал React:<br />
                                                Github - https://github.com/knockjkeee/voda_template<br />
                                                Простенький Landing page: https://knockjkeee.github.io/voda-app/<br />
                                                Резюме:: https://github.com/knockjkeee/ProfileCVTemplates
                                                <br />
                                                Для простых задач, автоматизация рутины, использую Python. Как пример, посчитать количество и определить формат, pdf страниц готового проекта (в среднем, в проекте более 10 000 страниц), без рекурсии, в базовой директории.<br />
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
