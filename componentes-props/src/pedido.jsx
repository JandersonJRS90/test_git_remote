const   Pedido = (props) =>{
    return (
        <div className="card">
            <div className="card-header text-muted">{props.data}</div>
            <div className="card-body d-flex">
              <div className="d-flex align-items-center">
                <i class={`fa-solid fa-${props.icone} fa-2x fa-shake`}></i>
              </div>
              <div className="border flex-grow-1 text-center ms-3 py-2">
                <h4>{props.titulo}</h4>
                <p>{props.descricao}</p>
              </div>
            </div>
          </div>
    )
}
export default Pedido