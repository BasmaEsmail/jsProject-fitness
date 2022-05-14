var toolsJson= [
    {
    id:"1",
    toolName:"Dumbbell",
    image:"data:image/jpeg;base64,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",
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
////////////// SEARCH
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
    icon.setAttribute("flag2","true");
    icon.setAttribute("onclick","addFavourite(event)");
    
    icon2.setAttribute("class","fa-solid fa-cart-plus ");
    icon2.setAttribute("flag","true");
    icon2.setAttribute("onclick","add(event)");

        //// CREATE SPAN OF ICONS/////
    controls=document.createElement("span");
    controls.setAttribute("style","display:none");
    controls.setAttribute("class","controls")
    controls.setAttribute("id",toolsJson[i].id)
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
function add(event) {
    var flag= event.target.getAttribute("flag")
    if(flag=="true")
        {
            event.target.style.color="#ffff00"
            for(var i=0;i<toolsJson.length;i++)
            {
            if(event.target.parentNode.id==toolsJson[i].id)
            { 
                orders.push(toolsJson[i])
            }
            } 
            event.target.setAttribute("flag","false");
        }
        else 
        {
            event.target.style.color="white";
            orders.pop();
            event.target.setAttribute("flag","true");
        }
        localStorage.setItem("myOrders",JSON.stringify(orders));
  }

  //favourite



  var favourites=[]
  function addFavourite(event) {
      var flag2= event.target.getAttribute("flag2")
      if(flag2=="true")
          {
              event.target.style.color="red"
              for(var i=0;i<toolsJson.length;i++)
              {
              if(event.target.parentNode.id==toolsJson[i].id)
              { 
                  favourites.push(toolsJson[i])
              }
              } 
              event.target.setAttribute("flag2","false");
          }
          else 
          {
              event.target.style.color="white";
              favourites.pop();
              event.target.setAttribute("flag2","true");
          }
          localStorage.setItem("favourites",JSON.stringify(favourites));
        console.log(JSON.parse(localStorage.getItem("favourites")))

    }

