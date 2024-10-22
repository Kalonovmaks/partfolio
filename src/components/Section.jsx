import React from "react";
import html from '../img/css.png'
import android from '../img/android.png'
class Section extends React.Component{
    render(){
        return(
            <div id="section" className="section">
                <h1>Курсҳо</h1>
                <div className="row1">
                    <div className="col" id="m">
                        <img src={html} />
                        <h1>Html</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, velit.</p>
                        <button>Узнат больше</button>
                    </div>
                    <div className="col">
                        <img src={html} alt="" />
                        <h1>Css</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, velit.</p>
                        <button>Узнат больше</button>
                    </div>
                    <div className="col">
                        <img src={android} alt="" />
                        <h1>Android</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, velit.</p>
                        <button>Узнат больше</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Section