let cart= [];
let totalPrice = 0;

function addToCart(productName, price){
    cart.push({name: productName, price: price });
    totalPrice += price;
    updateCart();
}

function updateCart(){
    const cartList= document.getElementById("cart");
    cartList.innerHTML ="";

    cart.forEach(item =>{
        const li= document.createElement("li");
        li.textContent = `${item.name}-${item.price}€`;
        cartList.appendChild(li);
    });
    document.getElementById("total").textContent = `Gesamtpreis: ${totalPrice}€`
}
  /*const tkosten=getElementById("kosten");
  tkosten.innerHTML = totalPrice;
  console.log(cartList)*/
  function deleteCart(){
     cart=[];
     totalPrice= 0;
     updateCart();
  }

  function updateText() {
            const sliderValue = document.getElementById("slider").value;
            const text = document.getElementById("text");
            const paragraphs = [
                "Weiter so",
                "Achte,dass es dir weiterhin gut geht",
                "Hör auf dein Gefühl, Überanstreng dich nicht",
                "Vllt ist ne Pause sinnvoll?",
                "Du solltest dich ausruhen und auf dich achten."
            ];
            const emojis = [
               "😊",
               "🙂",
               "😐",
               "😢",
               "🛑", 
            ];
            text.textContent = emojis[sliderValue] + paragraphs[sliderValue];
        }
function closeAdd(){
    document.querySelector(".werbung").style.display = "none";
}
function closeAdd2(){
    document.querySelector(".werbung2").style.display = "none";
}
 window.addEventListener("DOMContentLoaded", function() {
      // Wait 5 seconds (5000ms)
      setTimeout(function() {
        document.querySelector(".werbung").style.display = "block";
      }, 5000);
      setTimeout(function(){
        document.querySelector(".werbung2").style.display = "block";
      },3000)
    })

    document.querySelector(".winnerimg").addEventListener("click", function() {
    document.querySelector(".winnerimg").src="img/Du Gewin.png";
    });