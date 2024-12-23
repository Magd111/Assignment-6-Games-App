import { Ui } from "./ui.js";

export class Details {
    constructor(id){
        this.ui = new Ui();

        document.querySelector("#btnClose").addEventListener("click" , () =>{
            document.querySelector(".details").classList.add("d-none")
            document.querySelector(".games").classList.remove("d-none")
        })
        this.getDetails(id)
    }

    async getDetails(id){
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers:{
                 'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
                 'x-rapidapi-key': '734cc3eb9fmshdfde2da8d04c72ep1c0163jsn636bcc3b5766',
            },
                
        };
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options)
        const apiDetails = await response.json();
        this.ui.displayDetails(apiDetails);
        loading.classList.add("d-none");
    }
}   