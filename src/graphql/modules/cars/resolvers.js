import Car from '../../../models/Car'
import Marca from '../../../models/Marca'


export default {
    Car: {
        marca: (car) => Marca.findById(car.marca)
    },
    Query: {
        cars: () => Car.find(),
        car: (_, { id }) => Car.findById(id),
    },
    Mutation: {
        createCar: (_,{ data } ) => Car.create(data),
        updateCar: (_, { id, data }) => Car.findOneAndUpdate(id, data,{new : true }),
        deleteCar: async (_, { id }) =>{
            const deleted = await Car.findOneAndDelete(id)
            return !!deleted
        }
    },
}