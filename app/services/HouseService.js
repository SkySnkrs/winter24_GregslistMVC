import { AppState } from "../AppState.js";
import { House } from "../models/House.js";



class HouseService {

    createHouseListing(houseData) {
        console.log('service creating House', houseData);
        const createdCard = new House(houseData)
        AppState.houses.push(createdCard)
        console.log('AppState Houses', AppState.houses);
        this.saveHouses()
    }


    deleteHouseListing(houseId) {
        console.log('Deleting House', houseId);
        const houseToDelete = AppState.houses.find(house => house.id == houseId)
        console.log('DELETING HOUSE WITH ID:', houseToDelete);
        const indexToRemove = AppState.houses.indexOf(houseToDelete)
        AppState.houses.splice(indexToRemove, 1)
        this.saveHouses()
    }


    saveHouses() {
        let stringData = JSON.stringify(AppState.houses)
        localStorage.setItem('gregslist_houses', stringData)
    }


    loadHouses() {
        let stringData = localStorage.getItem('gregslist_houses')
        console.log('Loading Houses', stringData);
        let housesData = JSON.parse(stringData)
        console.log('Houses Loading', housesData);
        if (!housesData) return
        const houses = housesData.map(houseData => new House(houseData))
        console.log('Done Loading Houses', houses);
        AppState.houses = houses
    }
}

export const houseService = new HouseService()