import { AppState } from "../AppState.js";
import { houseService } from "../services/HouseService.js";

export class HouseController {
    constructor() {
        console.log('TIME TO START SELLING HOUSES');
        AppState.on('houses', this.drawHouses)
        houseService.loadHouses()
    }

    drawHouses() {
        console.log('Drawing Houses');
        const houseListingElem = document.getElementById('house-listings');
        if (!houseListingElem) {
            console.warn('House listings element not found!');
            return;
        }
        houseListingElem.innerHTML = '';
        AppState.houses.forEach(house => houseListingElem.innerHTML += house.card);
    }

    createHouseListing() {
        event.preventDefault();
        const formElm = event.target;
        const formData = {
            beds: formElm.beds.value,
            baths: formElm.baths.value,
            sqft: formElm.sqft.value,
            price: formElm.price.value,
            imgUrl: formElm.imgUrl.value,
            color: formElm.color.value,
            year: formElm.year.value,
            description: formElm.description.value,
        };
        houseService.createHouseListing(formData);
        this.drawHouses();
    }

    deleteHouseListing(houseId) {
        const houseToDelete = AppState.houses.find(house => house.id === houseId);
        const confirmed = confirm("Are you sure you want to delete this?")
        if (!confirmed) return
        if (!houseToDelete) {
            console.warn('House not found!');
            return;
        }
        houseService.deleteHouseListing(houseId)


    }

}