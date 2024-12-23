

export class Ui {
  displayGames(data){
    let cartona='';
    for(let i = 0 ; i < data.length ; i++){
        cartona += `
        <div data-id="${data[i].id}" class="card p-2 " role="button">
                  <img class="w-100" src="${data[i].thumbnail}" alt="">
                  <div class="card-body d-flex justify-content-between align-items-center">
                    <h5 class="card-title h6">${data[i].title}</h5>
                    <span class=" bg-info p-1 rounded small">free</span>
                  </div>
                  <p class="text-center">${data[i].short_description}</p>
                  <div class="card-footer d-flex justify-content-between align-items-center">
                    <span class=" bg-secondary px-1 rounded small">${data[i].genre}</span>
                    <span class="platform  bg-secondary px-1 rounded small">${data[i].platform}</span>
                  </div>
                </div>
        `
    }
    document.getElementById("gameData").innerHTML = cartona;
  }


  displayDetails(data){
    const details = `
    <div class="col-lg-4 col-md-6 col-sm-12">
                  <img class="w-100" src="${data.thumbnail}" alt="">
               </div>
               <div class="col-lg-8 col-md-6 col-sm-12">
                  <h5 class="h2">Title: ${data.title}</h5>
                  <p class="small">Category: <span class="bg-info rounded p-1 small text-black fw-bold">${data.genre}</span></p>
                  <p class="small">Platform: <span class="bg-info rounded p-1 small text-black fw-bold">${data.platform}</span></p>
                  <p class="small">Status: <span class="bg-info rounded p-1 small text-black fw-bold">${data.status}</span></p>
                  <p class="small">${data.description}</p>
                  <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
               </div>
    `

    document.querySelector("#detailsContent").innerHTML = details;
  }
}
