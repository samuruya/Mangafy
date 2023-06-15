
const qs = window.location.search;
const cache = new URLSearchParams(qs)
const rID = cache.get('mID');
var cID = cache.get('chap');

function render_setup() {


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
    cID++;
    for(var x in vault['manga']) {
        if(rID == vault['manga'][x].name && !(cID > vault['manga'][x]['contents'].length -1)) {
            window.location.href = `read.html?mID=${vault['manga'][x].name}&chap=${cID}`;
        }
    }
    if(cID > vault['manga'][x]['contents'].length -1) {
        cID--;
    }
}

function mchap(){
    cID--;
    for(var x in vault['manga']) {
        if(rID == vault['manga'][x].name && !(cID < 0)) {
            window.location.href = `read.html?mID=${vault['manga'][x].name}&chap=${cID}`;
        }
        if (cID < 0) {
            cID++;
        }
    }

}