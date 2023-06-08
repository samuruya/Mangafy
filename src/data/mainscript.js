

const vault = [
    {   
        "name" : "OverKill",
        "disc":"Ash the main character is a modern day demon hunter",
        "thumb":"https://i.ibb.co/Svt1SVr/kid-cover.png"
    },
    {   "name" : "Kid", 
        "disc":"a 17 year old kickboxer start a gang at school",
        "thumb":"https://i.ibb.co/Svt1SVr/kid-cover.png"
    },
    {   "name" : "Godlike",
        "disc":"shit post with random popculture characters",
        "thumb":"https://i.ibb.co/8KvBtfB/covervol1.png"
    },
    
 ];

console.log(vault[2].thumb);

function render_client() {
    for(const i in vault) {
        console.log(vault[i].name);
        const slide = document.createElement(`a`);
        slide.innerHTML = ` <div>
                                <p>${vault[i].name}</p>
                            </div>
                        `;
        slide.style.background = `url(${vault[i].thumb})`;
        slide.style.backgroundSize = `cover`
        slide.href = '#';
        document.getElementById(`feat`).appendChild(slide);
    }

    for(const i in vault) {
        console.log(vault[i].name);
        const div = document.createElement(`div`);
        div.innerHTML = `
                            <img src="${vault[i].thumb}" alt="">
                            <h2>${vault[i].name}</h2>
                            <p>${vault[i].disc}</p>
                        `;
        document.getElementById(`new`).appendChild(div);
    }
}