import { useOutletContext } from 'react-router-dom'

export default function Noficcion() {
  const libros = useOutletContext()
  return (
    <>
      {libros.filter(li => li.categoria == "No ficción").map(v => {
        return (
            <p key={v.id}>{v.titulo}</p>
        )
      })

      }
    </>
  )
}