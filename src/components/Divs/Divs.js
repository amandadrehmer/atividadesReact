
import "./Divs.css"

function Divs(props){

    console.log(props.item)
    
    return(
        <div class="box-pagina-principal media1" onClick={props.item}>
                <img src={props.link} alt=""></img>
                <h4>{props.titulo}</h4>
        </div>
    )
}

export default Divs