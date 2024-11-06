import { HouseController } from './controllers/HouseController.js';

class HouseApp {
    constructor() {
        console.log('Houses Ready To List')
    }

    HouseController = new HouseController()
}

// Initialize and assign to the global window object if needed for direct DOM access
const houseApp = new HouseApp();
// @ts-ignore
window.houseApp = houseApp;
