import { useState } from 'react'
import MiBoton from './MiBoton'

// Estado con useState y eventos.
export default function Contador() {
  const [valor, setValor] = useState(0)

  return (
    <section className="tarjeta">
      <h2>Contador</h2>
      <p className="contador">{valor}</p>
      <div className="fila">
        <MiBoton texto="−1" variante="secundario" onClick={() => setValor(valor - 1)} />
        <MiBoton texto="Reiniciar" variante="secundario" onClick={() => setValor(0)} />
        <MiBoton texto="+1" onClick={() => setValor(valor + 1)} />
      </div>
      {valor < 0 && <p className="nota">El contador está en negativo.</p>}
    </section>
  )
}
