



var toolsJson= [
    {
    id:"1",
    toolName:"Dumbbell",
    image:"../dum.jpg",
    price:"50 EGP"
    },
    {
        id:"2",
        toolName:"Barbell",
        image:"../barbell.jpg",
        price:"70 EGP"
    },
    {
        id:"3",
        toolName:"Bench",
        image:"../bench.jpg",
        price:"80 EGP"
    },
    {
        id:"4",
        toolName:"Gym mat",
        image:"../mat.jpg",
        price:"40 EGP"
    },
    {
        id:"5",
        toolName:"Kettlebell",
        image:"../kettle.jpg",
        price:"60 EGP"
    },
    {
        id:"6",
        toolName:"Pull-up bar",
        image:"../pull.jpg",
        price:"80 EGP"
    }
]

//--Search

function search_Product() {
    let input = document.getElementById('inpu').value;
    console.log(input)
    input=input.toLowerCase();
    let x = document.getElementsByClassName('card');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

//--filterrrrrrrrrrrrrrrrrring
function Filter1(){
    let Dumbell = document.getElementById('Dumbel').value;
    let x = document.getElementsByClassName('card');
    console.log(x);
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.includes(document.getElementById("Dumbel"))) {
            x[1].style.display="none";
            x[2].style.display="none";
            x[3].style.display="none";
            x[4].style.display="none";
            x[5].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

function Filter2(){
    let Dumbell = document.getElementById('Dumbel').value;
    let x = document.getElementsByClassName('card');
    console.log(x);
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.includes(document.getElementById("Dumbel"))) {
            x[0].style.display="none";
            x[2].style.display="none";
            x[3].style.display="none";
            x[4].style.display="none";
            x[5].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

function Filter3(){
    let Dumbell = document.getElementById('Dumbel').value;
    let x = document.getElementsByClassName('card');
    console.log(x);
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.includes(document.getElementById("Dumbel"))) {
            x[0].style.display="none";
            x[1].style.display="none";
            x[2].style.display="none";
            x[4].style.display="none";
            x[5].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

function Filter4(){
    let Dumbell = document.getElementById('Dumbel').value;
    let x = document.getElementsByClassName('card');
    console.log(x);
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.includes(document.getElementById("Dumbel"))) {
            x[0].style.display="none";
            x[1].style.display="none";
            x[3].style.display="none";
            x[4].style.display="none";
            x[5].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}



    
var row= document.getElementById("row");
var img,card, icon,icon2;
for(var i =0;i<toolsJson.length;i++)
{
    card=document.createElement("div");
  card.setAttribute("class","card");
    card.setAttribute("onmouseover","openControls(this)")
    card.setAttribute("onmouseout","closeControls(this)")

    icon= document.createElement("i");
    icon2=document.createElement("i")
    icon.setAttribute("class","fa-solid fa-heart");
    icon2.setAttribute("class","fa-solid fa-cart-plus ");
    controls=document.createElement("span");
    controls.setAttribute("style","display:none");
    controls.setAttribute("class","controls")
    controls.appendChild(icon)
    controls.appendChild(icon2)


    img= document.createElement("img");
    img.setAttribute("src",toolsJson[i].image)
    img.setAttribute("id","toolImg")
    

    var head=document.createElement("h3");
    head.innerHTML= toolsJson[i].toolName;
    head.setAttribute("class","head-prod");

    var par=document.createElement("p");
    par.innerHTML= toolsJson[i].price;
    card.appendChild(img);
    card.appendChild(head);
    card.appendChild(par);
    card.appendChild(controls);

    row.appendChild(card);

}
function openControls(self)
{
    self.lastChild.setAttribute("style","display:visible")
}
function closeControls(self)
{
    self.lastChild.setAttribute("style","display:none")
}