export const News = (props) => {
    return(

        <ul>
            {props.news.map ((el,key ) =>{
                return <li>{el}</li>
            })}
        </ul>
    )

}