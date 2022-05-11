var toolsJson= [
    {
    id:"1",
    toolName:"Dumbbell",
    image:"../img/dum.jpg",
    price:"50 EGP"
    },
    {
        id:"2",
        toolName:"Barbell",
        image:"../img/barbell.jpg",
        price:"70 EGP"
    },
    {
        id:"3",
        toolName:"Bench",
        image:"../img/bench.jpg",
        price:"80 EGP"
    },
    {
        id:"4",
        toolName:"Gym mat",
        image:"../img/mat.jpg",
        price:"40 EGP"
    },
    {
        id:"5",
        toolName:"Kettlebell",
        image:"../img/kettle.jpg",
        price:"60 EGP"
    },
    {
        id:"6",
        toolName:"Pull-up bar",
        image:"../img/pull.jpg",
        price:"80 EGP"
    }
]
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