import { useOutletContext } from 'react-router-dom'

export default function Ficcion() {
  const libros = useOutletContext()
  return (
    <>
      {libros.filter(li => li.categoria == "Ficción").map(v => {
        return (
            <p key={v.id} >{v.titulo}</p>
        )
      })

      }
    </>
  )
}
