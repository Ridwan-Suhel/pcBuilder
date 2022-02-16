function updatePrice(clickId, inputId, price) {
  //sitennGB click events

  document.getElementById(clickId).addEventListener("click", function () {
    const memoryPrice = document.getElementById(inputId);
    memoryPrice.innerText = price;

    const bestPrice = document.getElementById("best-price");
    const memoryCost = document.getElementById("memory-cost");
    const storageCost = document.getElementById("storage-cost");
    const deliveryCost = document.getElementById("delivery-cost");

    const totalPrice = document.getElementById("total-price");

    totalPrice.innerText =
      parseFloat(bestPrice.innerText) +
      parseFloat(memoryCost.innerText) +
      parseFloat(storageCost.innerText) +
      parseFloat(deliveryCost.innerText);
  });
}
// memory
updatePrice("eightGB", "memory-cost", 0);
updatePrice("sixteenGB", "memory-cost", 100);
// storage
updatePrice("ssd1", "storage-cost", 0);
updatePrice("ssd2", "storage-cost", 200);
updatePrice("ssd3", "storage-cost", 300);

//delivery cost
updatePrice("free-delivery", "delivery-cost", 0);
updatePrice("paid-delivery", "delivery-cost", 20);

// promo code
document.getElementById("apply-btn").addEventListener("click", function () {
  const promoInput = document.getElementById("promo-input");
  const promoCode = "pHero";
  if (promoInput.value === promoCode) {
    const total = document.getElementById("total-price");
    let totalPrice = parseFloat(total.innerText);
    const discount = (totalPrice * 20) / 100;
    const discountPrice = totalPrice - discount;
    total.innerText = discountPrice.toFixed(2);

    // using 0.20
    // const discount = totalPrice * 0.2;
    // total.innerText = totalPrice - discount;

    //=================PROMO BUTTON SCRIPTS====================
    promoInput.setAttribute("disabled", true);
    this.setAttribute("disabled", true);

    promoBtn("ssd1");
    promoBtn("ssd2");
    promoBtn("ssd3");
    promoBtn("sixteenGB");
    promoBtn("eightGB");
    promoBtn("free-delivery");
    promoBtn("paid-delivery");
    //===================PROMOR BUTTON SCRIPT END================

    //applied message
    document.getElementById("applied-text").style.display = "block";
    document.getElementById("not-applied-text").style.display = "none";
  } else {
    document.getElementById("not-applied-text").style.display = "block";
    document.getElementById("applied-text").style.display = "none";
  }
});

function promoBtn(setPromo) {
  const apllyBtn = document.getElementById("apply-btn");
  const promoInput = document.getElementById("promo-input");
  document.getElementById(setPromo).addEventListener("click", function () {
    promoInput.removeAttribute("disabled");
    apllyBtn.removeAttribute("disabled");

    promoInput.value = "";
    document.getElementById("applied-text").style.display = "none";

    const notApllied = document.getElementById("not-applied-text");
    notApllied.style.display = "block";
  });
}

// promo input listener
// document.getElementById("promo-input").addEventListener("keyup", function (e) {
//   if (e.target.value === "") {
//     document.getElementById("applied-text").style.display = "none";
//     document.getElementById("not-applied-text").style.display = "none";
//   }
// });
// document.getElementById("promo-input").addEventListener("change", function (e) {
//   if (e.target.value === "") {
//     document.getElementById("applied-text").style.display = "none";
//     document.getElementById("not-applied-text").style.display = "none";
//   }
// });
