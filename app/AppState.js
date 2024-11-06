import { Car } from './models/Car.js'
import { House } from './models/House.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  cars = [
    new Car({
      make: 'Jaguar',
      model: 'XE',
      year: 2017,
      color: 'silver',
      imgUrl: 'https://images.unsplash.com/photo-1630045698264-a0e3396c2cb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGphZ3VhciUyMHhlfGVufDB8fDB8fHww'
    }),
    new Car({
      make: 'Honda',
      model: 'Civic',
      year: 2020,
      color: 'red',
      imgUrl: 'https://images.unsplash.com/photo-1636915873177-a0c1a48d84eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbmRhJTIwY2l2aWN8ZW58MHx8MHx8fDA%3D',
      mileage: 500
    }),
    new Car({
      make: 'Tonka',
      model: 'Truck',
      year: 1993,
      color: 'yellow',
      imgUrl: 'https://images.unsplash.com/photo-1677372191857-f596af525205?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG9ua2ElMjB0cnVja3xlbnwwfHwwfHx8MA%3D%3D'
    }),
  ]

  houses = [
    new House({
      sqft: 1250,
      beds: 1,
      baths: 1,
      price: 200000,
      imgUrl: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D',
      color: 'Grey',
      year: 2000,
      description: 'this house is sort of nice'
    }),
    new House({
      sqft: 2000,
      beds: 2,
      baths: 1,
      price: 220000,
      imgUrl: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8fDA%3D',
      color: 'Black',
      year: 2022,
      description: 'this house is kind of nice'
    }),
    new House({
      sqft: 2500,
      beds: 4,
      baths: 2,
      price: 300000,
      imgUrl: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D',
      color: 'White',
      year: 1995,
      description: 'this house is very nice'
    }),
  ]

  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())