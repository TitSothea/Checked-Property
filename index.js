const mySubscribe = document.getElementById("mySubscribe");
const Visa = document.getElementById("Visa");
const Mastercard = document.getElementById("Mastercard");
const Paypal = document.getElementById("Paypal");
const mySubmit = document.getElementById("mySubmit");
const SubResult = document.getElementById("SubResult");
const PayResult = document.getElementById("PayResult");


mySubmit.onclick = function(){
    if(mySubscribe.checked){
        SubResult.textContent = `You have Subscribed to this site.`
    }
    else {
        SubResult.textContent = `You are not Subscribe to this site yet!`
    }

    if(Visa.checked){
        PayResult.textContent = `You are paying with VISA.`
    }
    else if(Mastercard.checked){
        PayResult.textContent = `You are paying with MASTERCARD.`
    }
    else if(Paypal.checked){
        PayResult.textContent = `You are paying with PAYPAL.`
    }
    else {
        PayResult.textContent = `You should select a CARD to pay.`
    }
}