start = false
let header = document.querySelector(".header");
header.addEventListener("mouseover", (e)=>{
    if(start == false){
            let container = document.querySelector(".qr-container");

    let qr_code_el = document.createElement("div");
    qr_code_el.classList.add("qr-code");

    let desc = document.createElement("div");
    desc.classList.add("text");
    desc.innerText="Your QR Code";
    qr_code_el.append(desc);

    let footer = document.createElement("div");
    footer.classList.add("footer");

    let btn = document.createElement("button");
    btn.classList.add("Generate");
    btn.innerText="Generate";
    footer.append(btn);
    
    container.append(qr_code_el);
    container.append(footer);

    setTimeout(()=>{
        qr_code_el.classList.add("show");
        footer.classList.add("show");
    },10);

    start=true;

    let generate_QR = (n)=>{
    let qrcode = document.querySelector(".qr-code");
    qrcode.style.display = "grid";
    qrcode.style.backgroundColor="white";
    qrcode.innerHTML=``;
for(let i = 0; i<n;i++){
    let box = document.createElement("div");
    box.classList.add("box");
    qrcode.append(box);
    
}

let template_size="1fr ";
let template = "";
for(let i = 0; i<Math.sqrt(n);i++){
    template+=template_size;
}
console.log(template)

qrcode.style.gridTemplateColumns = template;
qrcode.style.gridTemplateRows = template;

let boxes = document.querySelectorAll(".box");
for(let i = 0; i < n;i++){
    if(Math.floor(Math.random()*2) == 0){
        boxes[i].style.backgroundColor="black";
    }
}

for(let i = 0;i<11;i++){
    for(let j = 0; j < 11; j++){
        if(i == 10 || j == 10)
            boxes[i + Math.sqrt(n)*j].style.backgroundColor="white";
        else if( i > 2 && i <7 && j >2 && j<7)
            boxes[i + Math.sqrt(n)*j].style.backgroundColor="white";
        else
            boxes[i + Math.sqrt(n)*j].style.backgroundColor="black";
    }
}

for(let i = 39;i<50;i++){
    for(let j = 0; j < 11; j++){
        if(i == 39 || j == 10)
            boxes[i + Math.sqrt(n)*j].style.backgroundColor="white";
        else if( i > 42 && i <47 && j >2 && j<7)
            boxes[i + Math.sqrt(n)*j].style.backgroundColor="white";
        else
            boxes[i + Math.sqrt(n)*j].style.backgroundColor="black";
    }
}

for(let i = 0;i<11;i++){
    for(let j = 39; j < 50; j++){
        if(i == 10 || j == 39)
            boxes[i + Math.sqrt(n)*j].style.backgroundColor="white";
        else if( i > 2 && i <7 && j >42 && j<47)
            boxes[i + Math.sqrt(n)*j].style.backgroundColor="white";
        else
            boxes[i + Math.sqrt(n)*j].style.backgroundColor="black";
    }
}
}

let generate_initiate_button = document.querySelector(".Generate");
generate_initiate_button.addEventListener("click",()=>{
    generate_QR(2500);
});
    }

})










