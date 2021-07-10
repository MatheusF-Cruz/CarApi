import Marca from '../../../models/Marca'


export default {
    Query: {
        marcas: () => Marca.find(),
        marca: (_, { id }) => Marca.findById(id),
    },
    Mutation: {
        createMarca: (_,{ data } ) => Marca.create(data),
        updateMarca: (_, { id, data }) => Marca.findOneAndUpdate(id, data,{new : true }),
        deleteMarca: async (_, { id }) =>{
            const deleted = await Marca.findOneAndDelete(id)
            return !!deleted
        }
    },
}