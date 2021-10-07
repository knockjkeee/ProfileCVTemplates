import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <div className="card light-blue darken-4 z-depth-0">
                    <div className="card-content">
                        <h6 className="white-text">
                            <strong>КОНТАКТНАЯ ИНФОРМАЦИЯ</strong>
                        </h6>
                        <hr />
                        {/* <p className="grey-text text-lighten-3 pt">
                            Russia, Moscow
                        </p> */}
                        <p className="grey-text text-lighten-3 pt">
                            <strong>Дата рождения</strong>: 10.09.1986
                            <br />
                            <strong>Адрес места проживания</strong>: г. Москва ул. Керченская д. 24
                            <br />
                            <strong>Контактный телефон</strong>: +7(926)780-85-57
                            <br />
                            <strong>Email</strong>: knockjkeee@gmail.com
                            <br />


                            Phone: +123456789
                            <br />
                            Email: email@email.com
                            <br />
                            Wersite: www.google.com
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
