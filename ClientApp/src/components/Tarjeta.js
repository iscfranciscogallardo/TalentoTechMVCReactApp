const Tarjeta = (props) => {
    return (
        <div className="card text-center bg-dark mt-5">
            <div class="card-body">
                <h1 className="card-title text-info" >{props.titulo || "T�tulo de la tarjeta"}</h1>
                <p className="card-text text-light">{props.descripcion || "Descripci�n de la tarjeta"</p>
                <button class="">{props.textbutton || "Click aqui"}</button>
            </div>
        </div>
    )
}

export default Tarjeta;