import { categorias } from './data/categorias'
import { productos } from './data/productos'
import { PrismaClient } from '@prisma/client'

const Prisma = new PrismaClient()

const main = async () : Promise<void> => {
    try {
        await Prisma.categoria.createMany({
            data: categorias
        })    
        await Prisma.producto.createMany({
            data: productos
        })          
    } catch (error) {
        console.log(error)
    }
}
main()