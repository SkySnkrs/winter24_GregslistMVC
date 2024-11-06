import { CarsController } from './controllers/CarsController.js';

class CarsApp {
    constructor() {
        console.log('Cars Ready To List')
    }

    CarsController = new CarsController();
}


// Initialize and assign to the global window object if needed for direct DOM access
const carsApp = new CarsApp();
// @ts-ignore
window.carsApp = carsApp;
