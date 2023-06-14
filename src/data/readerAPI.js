
const qs = window.location.search;
const cache = new URLSearchParams(qs)
const rID = cache.get('mID');
const cID = cache.get('chap');

function render_setup() {
    console.log(vault['manga'][2]['contents'].length);

    for(var i in vault['manga']) {
        if(vault['manga'][i].name == rID) {
            const titl = document.createElement(`div`);
            titl.innerHTML = `<h1>${vault['manga'][i].name}<p>${vault['manga'][i].disc}</p></h1>`
            document.getElementById('heSt').appendChild(titl);
            for(var y in vault['manga'][i]['contents'][cID]) {
                const page = document.createElement(`div`);
                page.id = y
                page.innerHTML = `<img src="${vault['manga'][i]['contents'][cID][y]}">`
                document.getElementById('pageCont').appendChild(page);
            }
            break;
        } else {
            if(rID == null) {
                const tit = document.createElement(`div`);
                tit.style.height = `500px`
                tit.innerHTML = `
                                <h1>404 <p>We Couldnt find the manga your looking for</p></h1>
                                <a href="main.html"><= back</a>
                                `
                document.getElementById('heSt').appendChild(tit);
                break;
            }
        }
    }
}

function pchap(){
    cID = cID + 1;
}

function mchap(){

}