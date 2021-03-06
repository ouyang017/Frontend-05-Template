//Array.prototype.slice.call(document.querySelector("#container").children).filter(e => e.getAttribute("data-tag").match(/css/)).map(e=>({name:e.children[1].innerText,url:e.children[1].children[0].href}))
//JSON.stringify()

let iframe = document.createElement("iframe");
document.body.innerHTML = "";
document.body.appendChild(iframe);

function happen(element,event) {
    return new Promise(function(resolve){
        let handler = ()=>{
            resolve();
            element.removeEventListener(event,handler);
        }
        element.addEventListener(event,handler);
    })
}

void async function(){
    for (const standard of standards) {
        iframe.src = standard.url;
        console.log(standard.name);
        await happen(iframe,"load");
        console.log(iframe.contentDocument.querySelectorAll(".propdef"))
    }
}