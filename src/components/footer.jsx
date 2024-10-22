import React from "react";
import fase from '../img/facebok.png'
import inst from '../img/ins.jpg'
import teleg from '../img/teleg.png'
import react from '../img/react.webp'

class Footer extends React.Component{
    render(){
        return(
            <div id="footer" className="footer">
                <div className="foot">
                    <h2>Контакты</h2>
                    <p>Адрес:г.Хуҷанд</p>
                    <p>Телефон: +992780402424</p>
                    <p>G-mail: maqsudkalonov168@gmail.com</p>                                    
                </div>
                <div className="foot">
                    <a href="https://react.dev/"><img className="im" src={react} /></a>
                    <p className="p">© 2024 Ваш Сайт. Все права защищены.</p></div>
                <div className="foot" id="next">
                <h2>Социальные сети</h2>
                     <a href="https://www.facebook.com/"><img src={fase} /></a>
                     <a href="https://www.instagram.com/"><img src={inst} /></a>
                     <a href="https://web.telegram.org/a/"><img src={teleg} /></a>
                </div>
            </div>
        )
    }
}
export default Footer