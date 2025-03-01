const App = () =>{
  return  (
    <div style={{width: 768, margin: 'auto', backgroundColor: '#eee', padding: 12, borderRadius:8}}>
      <label className="rotulo" htmlFor="name" style={{display: 'block', marginBottom: 4}}>Nome:</label>
      <input type="text" id="name" style={{padding: "8px 0", borderStyle:'hidden', width: '100%', borderRadius: 8, outline: 'none'}} />
      <button style={{marginTop: 8, padding: '8px 0', background: 'blueviolet', color: 'white', border: 'none', borderRadius: 8, width: '100%'}}>
        Enviar
      </button>
    </div>
  )
}
export default App