import React from "react";
import humen from '../img/humen.png'
class Obloshka extends React.Component{
    render(){
        return(
            <div id="ablojka" className="obloshka">
                <div>
                    {/* <img src={humen} width={200} height={200} /> */}
                </div>    
                <div className="block1">
                    <h2>Хуш омадед ба сомонаи шахсии ман!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore distinctio placeat accusamus id? Illum enim, eum doloribus magni atque, adipisci perferendis iste excepturi tempore, incidunt ut? Tempora, voluptate officiis.
                    Dolor, sapiente aspernatur! Vel voluptatem cupiditate modi mollitia, possimus assumenda aperiam facere maxime quam deleniti facilis vitae, dolor asperiores accusamus sunt. Expedita nihil asperiores praesentium laboriosam harum veniam qui obcaecati.</p>
             
                    <button className="btnNext">Муфасалтар...</button>
                </div>
            </div>
        )
    }
}
export default Obloshka