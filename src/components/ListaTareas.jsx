import { useState } from 'react'
import MiBoton from './MiBoton'

// Listas con map y key, formularios y actualización inmutable del estado.
export default function ListaTareas() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Aprender componentes', hecha: true },
    { id: 2, texto: 'Practicar useState', hecha: false },
  ])
  const [nueva, setNueva] = useState('')

  function agregar(e) {
    e.preventDefault()
    if (!nueva.trim()) return
    setTareas([...tareas, { id: Date.now(), texto: nueva.trim(), hecha: false }])
    setNueva('')
  }

  function alternar(id) {
    setTareas(tareas.map((t) => (t.id === id ? { ...t, hecha: !t.hecha } : t)))
  }

  function eliminar(id) {
    setTareas(tareas.filter((t) => t.id !== id))
  }

  const pendientes = tareas.filter((t) => !t.hecha).length

  return (
    <section className="tarjeta">
      <h2>Lista de tareas</h2>
      <form className="fila" onSubmit={agregar}>
        <input
          aria-label="Nueva tarea"
          value={nueva}
          onChange={(e) => setNueva(e.target.value)}
          placeholder="Nueva tarea"
        />
        <MiBoton texto="Agregar" />
      </form>
      <ul className="tareas">
        {tareas.map((t) => (
          <li key={t.id} className={t.hecha ? 'hecha' : ''}>
            <label>
              <input type="checkbox" checked={t.hecha} onChange={() => alternar(t.id)} />
              {t.texto}
            </label>
            <MiBoton texto="Quitar" variante="secundario" onClick={() => eliminar(t.id)} />
          </li>
        ))}
      </ul>
      <p className="nota">{pendientes === 0 ? 'Todo listo.' : `${pendientes} pendiente(s)`}</p>
    </section>
  )
}
