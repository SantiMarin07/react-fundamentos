// Botón reutilizable: recibe el texto y la acción por props.
export default function MiBoton({ texto, onClick, variante = 'primario' }) {
  return (
    <button className={`boton boton--${variante}`} onClick={onClick}>
      {texto}
    </button>
  )
}
