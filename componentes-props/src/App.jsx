import Pedido from "./pedido"
const App = () =>{
  return  (
    <div className="container border rounded mt-2">
      <div className="row">
        <div className="col-sm-12 col-lg-6 col-xxl-3">
          <Pedido data="22/04/2024" icone="headset" titulo="Headset" descricao="Headset Bluetooth" />
        </div>
        <div className="col-sm-12 col-lg-6 col-xxl-3">
          <Pedido data="22/04/2024" icone="gamepad" titulo="Gamepad" descricao="Controle de Nitendo" />
        </div>
        <div className="col-sm-12 col-lg-6 col-xxl-3">
          <Pedido data="22/04/2024" icone="hippo" titulo="Hopopotamo" descricao="Hopopotamo Fêmea" />
        </div>
        <div className="col-sm-12 col-lg-6 col-xxl-3">
          <Pedido data="22/04/2024" icone="snowman" titulo="Boneco de Neve" descricao="Esse boneco de neve balança sozinho" />
        </div>
      </div>
    </div>
  )
}
export default App