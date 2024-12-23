import { Ui } from "./ui.js";
import { Details } from "./details.js";

export class Game {
    constructor(){
        this.getGames("mmorpg")

        document.querySelectorAll(".menu a").forEach((link) => {
            link.addEventListener("click" , (e) =>{
                e.preventDefault();
                document.querySelector(".menu .active").classList.remove("active")
                e.target.classList.add("active");
                this.getGames(e.target.dataset.category)
            })

        })
        
        this.ui = new Ui();
    }

    async getGames(category){
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        
        const options = {
            method: 'GET',
            headers:{
                 'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
                 'x-rapidapi-key': '734cc3eb9fmshdfde2da8d04c72ep1c0163jsn636bcc3b5766',
            },
                
        };
        const apiGames = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options )
        const data = await apiGames.json()
        this.ui.displayGames(data);
        this.display();
        loading.classList.add("d-none")
    }

    display(){
        document.querySelectorAll(".card").forEach((item) => {
            item.addEventListener("click", () => {
               const id = item.dataset.id;
               this.showDetails(id);
            });
    }
)}
    showDetails(idGame){
        const details = new Details(idGame);
        document.querySelector(".games").classList.add("d-none")
        document.querySelector(".details").classList.remove("d-none")
    }
}