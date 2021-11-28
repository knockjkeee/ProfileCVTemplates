import React, { Component } from 'react'
import Popup from 'reactjs-popup';

export default class NIS extends Component {
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
                                                1. Разработка микросервисного модуля выгрузки файлов в систему service desk Naumen.<br />Язык программирования: <br />- JAVA (https://github.com/knockjkeee/UploadFileNaumenSD) <br />- C# (https://github.com/knockjkeee/RestApiWithServiceWorker)<br />
                                                <br />
                                                2. Модернизация существующего проекта "Комплекс средств автоматизации единой службы поддержки пользователей ЦБ РФ на базе телефонии Avaya". Интеграция с Rest Api чат-бота.
                                                <br />Язык программирования: C# (Gitlab Заказчика)
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
