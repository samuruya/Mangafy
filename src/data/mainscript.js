



var vault = {
    title: "vault",
    version: "0.0.2",
    manga: [
        {   
            "name" : "OverKill",
            "disc":"Ash the main character is a modern day demon hunter",
            "thumb":"https://i.ibb.co/XYpbYJ1/Overkillcover.png",
            "contents": [

            ]
        },
        {   "name" : "Kid", 
            "disc":"a 17 year old kickboxer start a gang at school",
            "thumb":"https://i.ibb.co/Svt1SVr/kid-cover.png",
            "contents": [

            ]
        },
        {   "name" : "Godlike",
        "disc":"shit post with random popculture characters",
        "thumb":"https://i.ibb.co/8KvBtfB/covervol1.png",
        "contents": [
            [
            "https://i.ibb.co/bP656nX/Page-1.png",
            "https://i.ibb.co/kDXSjjd/Page-2.png",
            "https://i.ibb.co/PNn3vmk/Page-3.jpg",
            "https://i.ibb.co/yXmMmvR/Page-4.jpg",
            "https://i.ibb.co/L0LYwTw/Page-5.png",
            ],
            [
            "https://i.ibb.co/QcChbDH/Page-6.jpg",
            "https://i.ibb.co/DWRRW8G/Page-7.jpg",
            "https://i.ibb.co/K9n3DM0/Page-8.jpg",
            "https://i.ibb.co/FwT9ywH/Page-9.jpg",
            "https://i.ibb.co/kK9jC69/Page-10.jpg",
            ],        
            [
            "https://i.ibb.co/7Qp6cHB/Page-11.jpg",
            "https://i.ibb.co/M8wPMHf/page-12.jpg",
            "https://i.ibb.co/Tvm1pT7/page-13-added-text.png"
            ]
        ]
    },
    {   "name" : "Coming Soon",
    "disc":"...",
    "thumb":"https://i.ibb.co/8KvBtfB/covervol1.png",
    "contents": [
    ]
},
        
    ]
};




function render_client() {
    for(const i in vault['manga']) {
        console.log(vault['manga'][i].name);
        const slide = document.createElement(`button`);
        slide.innerHTML = ` <div">
                                <p>${vault['manga'][i].name}</p>
                            </div>
                        `;
        slide.style.background = `url(${vault['manga'][i].thumb})`;
        slide.style.backgroundSize = `cover`
        slide.classList.add("card")
        slide.id = i;
        slide.onclick = function(){read_ent(i)};
        document.getElementById(`feat`).appendChild(slide);
    }

    for(const i in vault['manga']) {
        console.log(vault['manga'][i].name);
        const div = document.createElement(`button`);
        div.innerHTML = `
                            <img src="${vault['manga'][i].thumb}" alt="">
                            <h2>${vault['manga'][i].name}</h2>
                            <p>${vault['manga'][i].disc}</p>
                        `;
        div.onclick = function(){read_ent(i)};
        document.getElementById(`new`).appendChild(div);
    }
}

function read_ent(mID) {
    if(mID >= 0) {
        window.location.href = `read.html?mID=${vault['manga'][mID].name}&chap=${0}`;
    }
}



function render_list() {
    for(const i in vault['manga']) {
        console.log(vault['manga'][i].name);
        const div = document.createElement(`button`);
        div.innerHTML = `
                            <img src="${vault['manga'][i].thumb}" alt="">
                            <div>
                                <h2>${vault['manga'][i].name}</h2>
                                <p>${vault['manga'][i].disc}</p>
                            </div>
                        `;
        div.onclick = function(){read_ent(i)};
        document.getElementById(`list`).appendChild(div);
    }
}
