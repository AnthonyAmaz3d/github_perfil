import Perfil  from "./components/Perfil"
import Formulario from "./components/Formulario"
import ReposList from "./components/ReposList"
import { useState } from "react"

function App() {
  const [nomeUsario, setNomeUsuario] = useState('')

  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
      
      {nomeUsario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsario} />
          < ReposList nomeUsuario={nomeUsario} />
        </>
      )}
    </>
  )
}

export default App
