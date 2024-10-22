import React from "react";
import news from '../img/news.jpg'
import khabar from '../img/khabar.jpg'
import partfol from '../img/partfol.jpg'

class Project extends React .Component{
    render(){
        return(
            <div id="project" className="project">
                <h1>Лоиҳаҳо</h1>
                <div className="row1">
                    <div className="col" id="m">
                        <div className="prog"><img src={news}  /></div>
                        <h1>Проект 1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, velit.</p>
                        <button>Узнат больше</button>
                    </div>
                    <div className="col">
                        <div className="prog"><img src={khabar} /></div>
                        <h1>Проект 2</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, velit.</p>
                        <button>Узнат больше</button>
                    </div>
                    <div className="col">
                        <div className="prog"><img src={partfol} /></div>
                        <h1>Проект 3</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, velit.</p>
                        <button>Узнат больше</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Project