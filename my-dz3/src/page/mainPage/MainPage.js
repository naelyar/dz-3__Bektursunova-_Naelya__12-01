import React from "react";
import {News} from "../../component/news/News";

class  MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({menuStatus: false});
        this.handleMenu = this.handleMenu.bind(this)

    }


    news = ["book", "pen", "bagk"];
    handleMenu() {
        this.setState ({menuStatus: !this.state.newsStatus})
    }
    
    render() {
    return ( 
        <>
            <h2> Main - {this.props.main} </h2>
            <News news = {this.news}/>
            {this.state.menuStatus === true ? <News/> :""  }

            <button onClick={this.handleMenu}>news</button>

        </>

        )
    }
}

export default MainPage;