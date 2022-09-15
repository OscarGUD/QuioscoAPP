import Layout from "../layout/layout"
import { useEffect, useCallback } from "react"
import useQuiosco from "../hooks/useQuiosco"
import { formatearDinero } from "../helpers"

const total = () => {

  const { pedido, setNombre, nombre, colocarOrden, total } = useQuiosco()

  const comprobarForm = useCallback(() => {
    return pedido.length === 0 || nombre === '' || nombre.length < 3
  },[pedido,nombre])

  useEffect(() => {
    comprobarForm()
  },[pedido, comprobarForm])

  return (
    <Layout pagina='Resumen'>
        <h1 className="text-4xl font black">Total y Confirmar Pedido</h1>
        <p className="text-2xl my-10">Confirmar tu pedido a continuacion</p>

        <form
          onSubmit={colocarOrden}
        >
          <div>
            <label className="block uppercase text-slate-800 font-bold text-xl" htmlFor="nombre">Nombre: </label>
            <input 
              type="text" 
              className="p-2 rounded-md bg-gray-200 w-full lg:w-1/3 mt-3"
              id="nombre"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
          </div>

          <div className="mt-10"> 
            <p className="text-2xl">Total a pagar {' '} <span className="font-bold">{formatearDinero(total)}</span></p>
          </div>

          <div className="mt-5">
            <input 
              disabled={comprobarForm()}
              type="submit" 
              value='Confirmar Pedido'
              className={`${comprobarForm() ? 'bg-indigo-200' : 'bg-indigo-600 cursor-pointer hover:bg-indigo-800'} text-center w-full lg:w-auto px-5 py-2 rounded uppercase text-white font-bold `}
            />
          </div>
        </form>
    </Layout>
  )
}

export default total