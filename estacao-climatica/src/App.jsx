import React from 'react'
import EstacaoClimatica from './EstacaoClimatica'
import Loading from './Loading'

class App extends React.Component{

  constructor(props){
    super(props)
    this.state  = {
      latitude: null,
      longitude: null,
      estacao: null,
      data: null,
      icone: null,
      mensagemDeErro: null
    }
  }

  obterEstacao = (data, latitude) =>{
    const anoAtual  = data.getFullYear()
    const d1  = new Date(anoAtual, 5, 21)
    const d2  = new Date(anoAtual, 8, 24)
    const d3  = new Date(anoAtual, 11, 22)
    const d4  = new Date(anoAtual, 3, 21)
    const estaNoSul = latitude < 0
    if(data >= d1 && data < d2)
     return  estaNoSul? 'Inverno' : 'Verão'
    if(data >= d2 && data < d3)
     return  estaNoSul? 'Primavera' : 'Outono'
    if(data >= d3 || data < d1)
     return  estaNoSul? 'Verão' : 'Inverno'
    return  estaNoSul? 'Outono' : 'Primavera'
  }

  icones  = {
    "Primavera": 'flower',
    "Verão": 'umbrella-beach',
    "Outono": 'leaf',
    "Inverno": 'snowflake'
  }

  obterLocalizacao = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const data  = new Date()
        const estacao = this.obterEstacao(data, position.coords.latitude)
        const icone = this.icones[estacao]
        console.log(estacao)
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          estacao: estacao,
          data: data.toLocaleTimeString(),
          icone: icone
        })
      },
      err => {
        this.setState({
          mensagemDeErro: 'Tente novamente mais tarde'
        })
      }
    )
  }
  
  render(){
    return (
      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-8 col-xxl-6">
            {
              (!this.state.latitude && !this.state.mensagemDeErro)?
                <Loading />
              :
                this.state.mensagemDeErro?
                  <p className="border rounded p-2 fs-1 text-center">
                    É necessário permitir o acesso a sua localizacao para que seja possível mosgtrar a sua estação climática
                  </p>
                :
                  <EstacaoClimatica
                    icone={this.state.icone}
                    estacao={this.state.estacao}
                    latitude={this.state.latitude}
                    longitude={this.state.longitude}
                    data={this.state.data}
                    mensagemDeErro={this.state.mensagemDeErro}
                    obterLocalizacao={this.obterLocalizacao}
                  />
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App