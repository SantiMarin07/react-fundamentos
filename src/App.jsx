import './App.css'
import Contador from './components/Contador'
import Saludo from './components/Saludo'
import ListaTareas from './components/ListaTareas'

function App() {
  return (
    <main>
      <header>
        <h1>Fundamentos de React</h1>
        <p>Componentes, props, estado, eventos, formularios y listas.</p>
      </header>
      <div className="grid">
        <Contador />
        <Saludo />
        <ListaTareas />
      </div>
    </main>
  )
}

export default App
