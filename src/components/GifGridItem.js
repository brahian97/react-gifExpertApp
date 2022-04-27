const GifGridItem = ({ url, tittle }) => {
    return ( 
        <div className="card animate__animated animate__lightSpeedInLeft">
            <img src={ url } alt={ tittle }/>
            <p>{ tittle }</p>
        </div>
     );
}
 
export default GifGridItem;