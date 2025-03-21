import Cartao from "./cartao"
import Pedido from "./pedido"
import Feedback from "./feedback"
const App = () =>{
    const textoOK = "Já Chegou"
    const textoNOK = "Ainda não Chegou"
    const funcaoOK = () => alert("Agradecemos seu FeedBack");
    const funcaoNOK = () => alert("Verificaremos oq aconteceu");
    const componentFeedback = (
    <Feedback
        textoOK = {textoOK}
        textoNOK = {textoNOK}
        funcaoOK = {funcaoOK}
        funcaoNOK = {funcaoNOK}
      />
    )
    return  (
    <div className="container border rounded mt-2">
      <div className="row">
        <div className="col-sm-12 col-lg-6 col-xxl-3">
          <Cartao data="22/04/2024">
           <Pedido icone="headset" titulo="Headset" descricao="Headset Bluetooth" />
           {componentFeedback}
          </Cartao>
        </div>
        <div className="col-sm-12 col-lg-6 col-xxl-3">
          <Cartao data="22/03/2024">
            <Pedido data="22/04/2024" icone="gamepad" titulo="Gamepad" descricao="Controle de Nitendo" />
            {componentFeedback}
          </Cartao>
        </div>
        <div className="col-sm-12 col-lg-6 col-xxl-3">
          <Cartao data="22/05/2024">
            <Pedido data="22/04/2024" icone="hippo" titulo="Hopopotamo" descricao="Hopopo=tamo Fêmea" />
            {componentFeedback}
          </Cartao>
        </div>
        <div className="col-sm-12 col-lg-6 col-xxl-3">
          <Cartao data="24/04/2024">
            <Pedido data="22/04/2024" icone="snowman" titulo="Boneco de Neve" descricao="Esse boneco de neve balança sozinho" />
            {componentFeedback}
          </Cartao>
        </div>
      </div>
    </div>
  )
}
export default App