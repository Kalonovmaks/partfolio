import React from "react";
import{Link} from 'react-router-dom'

class Header extends React.Component{
    render(){
        return(
            <div id="header" className="header" >
                <nav>
                    <ul>
                        <li><a href="#ablojka">Асоси</a></li> 
                        <li><a href="#section"> Курсҳо</a></li> 
                        <li><a href="#project"> Лоиҳаҳо</a></li> 
                        <li><a href="#material"> Маводҳо</a></li>
                        <li><a href="#footer"> тамос</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Header