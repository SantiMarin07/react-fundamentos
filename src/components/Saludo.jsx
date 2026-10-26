import { useState } from 'react'

// Input controlado: el valor del campo vive en el estado.
export default function Saludo() {
  const [nombre, setNombre] = useState('')

  return (
    <section className="tarjeta">
      <h2>Input controlado</h2>
      <label htmlFor="nombre">Tu nombre</label>
      <input
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribe tu nombre"
      />
      <p>{nombre ? `¡Hola, ${nombre}!` : 'Escribe algo para ver el saludo.'}</p>
    </section>
  )
}
