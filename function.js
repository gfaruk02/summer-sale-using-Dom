//common function
let total = 0;
function getCalculateSelectedItem(target){
  const selectedItemContainer = document.getElementById('item-count');
  const itemName = target.childNodes[3].childNodes[3].innerText;
  // console.log(itemName)
  const li = document.createElement("li");
  li.innerText = itemName;
  selectedItemContainer.appendChild(li);
  // console.log(selectedItemContainer)
  //find price amount
  const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
  //  console.log(price)
  total = parseFloat(total) + parseFloat(price);
  const totalAmount = total.toFixed(2);
  document.getElementById('total').innerHTML = totalAmount;
    
  //console.log(totalAmount)
  //Coupon button enable 
  const couponcontent = document.getElementById("coupon-button");
  if( totalAmount >= 200){
  //couponcontent.disabled = false;
  couponcontent.removeAttribute('disabled');
  couponcontent.style.backgroundColor =" #E527B2"
  }
  //Make purchase button enable
  const makePurchase = document.getElementById("make-purchase");
  if( totalAmount > 0){
  //   makePurchase.disabled = false; 
  makePurchase.removeAttribute('disabled');
  makePurchase.style.backgroundColor =" #E527B2"
  }
}

function getcoupon(){
  const couponCode = document.getElementById('coupon-field').value;
  if(couponCode == "SELL200"){
    // discount calculation and value set 
    const discountAmount = total * .20;
    const discountAmountTwoDecimal = discountAmount.toFixed(2);
    document.getElementById('discount').innerText = discountAmountTwoDecimal;
    //  Grand Total Calculation and Set 
    const grandTotal = total - discountAmountTwoDecimal;
    const grandTotalTwoDecimal = grandTotal.toFixed(2);
    document.getElementById('grand-total').innerText = grandTotalTwoDecimal;
  }
  else{
    alert('Invalid Coupon, try Use Promo Code: SELL200 ');
  }
}

function setHomePage(){
  let goHome = document.getElementById('make-purchase');
  goHome = window.location.href;
  document.getElementById('item-count').innerText = " ";
  document.getElementById('coupon-field').value = "";
  document.getElementById('total').innerHTML = total = "0.00";
  document.getElementById('discount').innerText = "0.00";
  document.getElementById('grand-total').innerText = "0.00";
  document.getElementById("coupon-button").disabled = true;
  document.getElementById("coupon-button").style.backgroundColor = "#fdafe8";
  document.getElementById("make-purchase").disabled = true;
  document.getElementById("make-purchase").style.backgroundColor = "#fdafe8";
}