const link = "https://api.jikan.moe/v4/anime?q=anime&sfw";
function tampil(){
    fetch(link).then(response => response.json()).then((item =>{
        const result = item.data;
        result.map((item) => {
            const img =document.createElement("img");
            img.classList.add("img");
            img.src = item.images.jpg.image_url;
            const div = document.getElementById("image");
            const tujuan = document.createElement("a");
            tujuan.href = item.trailer.url;
            // const title = document.createElement("p");
            tujuan.textContent = item.titles[1].title;


            div.appendChild(img);
            div.appendChild(tujuan);
            // div.appendChild(title);

        });
        console.log(result);
    })
)
}
tampil();
// Event
const variabel = document.getElementById("form");
const value = document.getElementById("search1");
variabel.addEventListener("submit",function(e){ 
    // e.preventDefault();
    // const v = value.value
    // console.log(v)
    fetch(link).then(response => response.json()).then(result => {
        const search = value.value;
        const splt = search.split(" ");
        const lwr = splt[0].toLowerCase();
        const link1 = result.data[1].title;
        const array = link1.split(" ");
        const array1 = array[1].toLowerCase();
        console.log(array1);
        if(lwr == array1){
            document.write("aaaaaaaaaaaaaaaaaaaaaaaaaaa")
        }
    })
})