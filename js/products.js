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
            x[i].style.listStyleType="none";                 
        }
    }
}


    
var row= document.getElementById("row");
var img,card, icon,icon2;
function getCart()
{
    var s=localStorage.getItem("myOrders");
            console.log(s)
}
for(var i =0;i<toolsJson.length;i++)
{
        ///// CREATE CARDS //////
    card=document.createElement("div");
    card.setAttribute("class","card");
    card.setAttribute("onmouseover","openControls(this)")
    card.setAttribute("onmouseout","closeControls(this)")

        ///// CREATE ICONS/////
    icon= document.createElement("i");
    icon2=document.createElement("i")
    icon.setAttribute("class","fa-solid fa-heart");
    icon2.setAttribute("class","fa-solid fa-cart-plus ");
    icon2.setAttribute("id",toolsJson[i].id);
    icon2.setAttribute("flag","true");
    icon2.setAttribute("onclick","add(this)");

        //// CREATE SPAN OF ICONS/////
    controls=document.createElement("span");
    controls.setAttribute("style","display:none");
    controls.setAttribute("class","controls")
    controls.appendChild(icon)
    controls.appendChild(icon2)

        ///// CREATE CARDS IMAGES/////
    img= document.createElement("img");
    img.setAttribute("src",toolsJson[i].image)
    img.setAttribute("id","toolImg")
    
    //// CREATE CARD TEXT
    var head=document.createElement("h3");
    head.innerHTML= toolsJson[i].toolName;
    head.setAttribute("class","head-prod");

    ///// APPEND ALL/////
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

/////////// ADD TO CART ////////////
var orders=[]
function add(self) {
    var flag= self.getAttribute("flag")
    if(flag=="true")
        {
            self.style.color="#ffff00"
            for(var i=0;i<toolsJson.length;i++)
            {
            if(self.id==toolsJson[i].id)
            { 
                orders.push(toolsJson[i])
            }
            } 
            self.setAttribute("flag","false");
        }
        else 
        {
            self.style.color="white";
            orders.pop();
            self.setAttribute("flag","true");
        }
        localStorage.setItem("myOrders",JSON.stringify(orders));
        console.log(JSON.parse(localStorage.getItem("myOrders")))

  }

