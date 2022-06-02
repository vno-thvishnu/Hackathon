
var div=document.createElement("div");
div.innerHTML=`<img class="logo" src=one.png></img>
<h1>Stay Pretty</h1>
<input type="text" placeholder="lipsticks,eyeliner,mascara,blush,foundation...." id="text"><br>
<button type="button" onclick="start()">Search</button>`;

div.style.textAlign="center";
document.body.append(div);

var section=document.createElement("section");
section.setAttribute("class" , "container");





async function start(){

   let bd=document.getElementById("text").value; 
   if(bd!== ""){  
      // console.log("entered if...")
   console.log(bd);
   let solution= await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${bd}`);
   let solution1=await solution.json();
   console.log(solution1);
   
   for(var i=0;i<solution1.length;i++){
    
      var products=document.createElement("div");
      products.setAttribute("class" , "products")
   products.innerHTML=`<img id="image_link" src="${solution1[i].image_link}"> <div id="brand">${solution1[i].brand}</div> 
   <div id="name">${solution1[i].name}</div>
 <div id="price">${solution1[i].price}</div> 
<div id="product_link">${solution1[i].product_link}</div> 
<div id="description">${solution1[i].description}</div>`;
section.append(products);
   
   }
document.body.append(section)

   }
}

