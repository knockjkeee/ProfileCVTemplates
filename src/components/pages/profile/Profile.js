import React, { Component } from 'react'
import ImgProfile from '../../images/img.jpg'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <div className="avatarImg">
                    <img className="circle responsive-img"
                        src={ImgProfile}
                        alt="Pavel R"
                    />
                </div>
                <div className="card light-blue darken-4 z-depth-0 hide-on-large-only">
                    <div className="card-content center social">
                        <h2 className="white-text text-lighten-e">
                            <strong>Ростов Павел</strong>
                        </h2>
                        <h5 className="grey-text text-lighten-1">Junior java developer</h5>
                        <a href="https://likedin.com" target="blank">
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a href="https://github.com/knockjkeee" target="blank">
                            <i className="fab fa-github-square fa-2x"></i>
                        </a>
                    </div>
                </div>
                <div className="card light-blue darken-4 z-depth-0">
                    <div className="card-content">
                        <h6 className="white-text">
                            <strong>ПРОФИЛЬ</strong>
                        </h6>
                        <hr />
                        <p className="grey-text text-lighten-3 pt">
                            <strong>Нераскрывшийся разработчик</strong> программного обеспечения, движущийся всегда вдоль берега <strong>бурлящей реки разработки</strong>,
                            <strong> преследуемый мечтой</strong> окунуться с головой в разработку
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
