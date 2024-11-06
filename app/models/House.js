import { generateId } from "../utils/GenerateId.js"



export class House {
    constructor(data) {
        this.id = generateId()
        this.beds = data.beds
        this.baths = data.baths
        this.sqft = data.sqft
        this.price = data.price
        this.imgUrl = data.imgUrl
        this.color = data.color
        this.year = data.year
        this.description = data.description
        this.listedAt = data.listedAt == undefined ? new Date() : new Date(data.listedAt)
    }

    get card() {
        return `
        <div class="col-md-4">
         <div class="card shadow-sm">
           <img class="card-img p-2"
             src="${this.imgUrl}"
             alt="">
           <div class="card-body">
             <p class="text-center fw-bold">
               SQFT: ${this.sqft},BEDS: ${this.beds},BATHS: ${this.baths}
             </p>
             <p class="mb-0">
               ${this.color}
             </p>
             <p class="mb-0">
               ${this.year}
             </p>
             <p class="mb-0">
               ${this.FormattedTime}
             </p>
             <p class="mb-0 text-center">
               ${this.price}
             </p>
             <div>
              <button onclick="houseApp.HouseController.deleteHouseListing('${this.id}')" class="btn btn-danger w-100" title="Delete ${this.sqft} ${this.year}"><i class="mdi mdi-delete-empty"></i></button>
             </div>
           </div>
         </div>
       </div>
        `
    }

    get FormattedTime() {
        return this.listedAt.toLocaleDateString('en-us', { weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric', minute: '2-digit', second: "2-digit" })
    }

}