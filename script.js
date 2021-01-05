let card = document.getElementById("card")
console.log(card)





let p = new Promise((resolve,reject)=>{
    let request = new XMLHttpRequest()
    request.open("GET","https://restcountries.eu/rest/v2/all",true)
    request.send()
    request.onload = function(){
        let data = JSON.parse(this.response)
        resolve(data)
    }
})

p
.then((data)=>{
    console.log(data)
    for(let i=0;i<data.length;i++){
        let div = document.createElement("div")
        div.innerHTML = `<div class="card" style="width: 18rem;"id=>
        <div class="card-head">
            <p>${data[i].name}</p>
        </div>
        <img src="${data[i].flag}" class="card-img-top" alt="...">
        <div class="card-body" >
            <!-- <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
            <ul>
                <li>Capital:<span id="special">${data[i].capital}</span></li>
                <li>Country Code:<span id="">${data[i].alpha2Code,data[i].alpha3Code}</span></li>
                <li>Region:<span id="">${data[i].region}</span></li>
                <li>Lat,Long:<span id="">${data[i].latlng.join(", ")}</span></li>
            </ul>
        </div>
    </div>`
        card.append(div)

        // console.log(data[i].name)
        // console.log(data[i].alpha2Code,data[i].alpha3Code)
        // console.log(data[i].region)
        // console.log(data[i].latlng.join(", "))
    }



})
.catch((err)=>{
    console.log(err)
})


