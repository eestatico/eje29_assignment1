function findPizzaShop() {
    window.open("https://www.google.com/maps/search/pizza+near+me", "_blank");
  }
  
  function invertSiteColors() {
    document.body.classList.toggle("inverted");
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const pizzaBtn = document.getElementById("findPizza");
    if (pizzaBtn) {
      pizzaBtn.addEventListener("click", findPizzaShop);
    }
  
    const invertBtn = document.getElementById("invertColors");
    if (invertBtn) {
      invertBtn.addEventListener("click", invertSiteColors);
    }
  });
  