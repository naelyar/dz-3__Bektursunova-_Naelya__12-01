import React from "react";
import {News} from "../../component/news/News";

class  MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({newsStatus: false});
        this.clickNews = this.clickNews.bind(this)

    }


    news = ["book", "pen", "bagk"];
    clickNews() {
        this.setState ({newsStatus: !this.state.newsStatus})
    }
    
    render() {
    return ( 
        <>
            <h2> Main - {this.props.main} </h2>
            <News news = {this.news}/>
            {this.state.newsStatus === true ? <News/> :""  }

            <button onClick={this.clickNews}>news</button>

        </>

        )
    }
}

export default MainPage;