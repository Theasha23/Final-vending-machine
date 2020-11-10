var change = 0;
var moneyinserted = 0;
var totalpaid = 0;
var message = "";
var msgE1 = document.getElementById("message");
var items = ["chips", "coke", "chocolate", "sweets"];
var chips = {cost: 10.50, stock: 3, displayName: "chips"};
var coke = {cost: 10.50, stock: 3, displayName: "coke"};
var chocolate = {cost: 10.50, stock: 3, displayName: "chocolate"};
var sweets = {cost: 10.50, stock: 3, displayName: "sweets"};

const price = 10.50;

const currency_R1 = 1;
const currency_R2 = 2;
const currency_R5 = 5;
const currency_50c = 0.5;

stockDisplay.innerHTML = ("Stock available - " + "items: " + chips.stock);

function getTotal() {
    var currency_R1s = Number(document.getElementById("R1").value)
    var currency_R2s = Number(document.getElementById("R2").value)
    var currency_R5s = Number(document.getElementById("R5").value)
    var currency_50cs = Number(document.getElementById("50c").value)

    if (currency_50cs > 0) {
        currency_50cs = currency_50c*currency_50cs;
    }
    if (currency_R1s > 0) {
        currency_R1s = currency_R1s*currency_R1;
    }
    if (currency_R2s > 0) {
        currency_R2s = currency_R2*currency_R2s;
    }
    if (currency_R5s > 0) {
        currency_R5s = currency_R5s*currency_R5;
    }

    totalpaid = currency_R1s + currency_R2s + currency_R5s + currency_50cs;

    return totalpaid

}

function tally() {
    moneyinserted = getTotal();
    document.getElementById("paid").innerHTML=moneyinserted;

}

function cleartally() {  
    moneyinserted = 0;
    document.getElementById("paid").innerHTML=moneyinserted;

}

function clearform() {  
    document.getElementById("R1").value = 0;
    document.getElementById("R2").value = 0;
    document.getElementById("R5").value = 0;
    document.getElementById("50c").value = 0;

}
function cancel() {   
    getTotal();

    if (totalpaid > 0) {
        message = "Transaction cancelled. R" + totalpaid + " has been returned.";
    clearform();
    cleartally();
    msgE1.innerHTML = message;
     } 
     else if (totalpaid==0) {
    message = "Insert money first. Select a food item";
    msgE1.innerHTML = message;
    }
}
function calculatechange() {
    var tempchange = 0;
    
    if (getTotal() !=0){
        return (tempchange = (getTotal() - price));
    }
    return tempchange;
}

function dispenseitems(item) {
    msgE1.innerHTML = "";
    change = 0;
     
    var selecteditems = items[item];

    change = calculatechange();

    if (change < 0) {
        message = "You did not pay enough. R" + totalpaid + " has been returned";
        totalpaid = 0;
        change = 0;
        clearform();
        cleartally();

        msgE1.innerHTML = message;
    }
    else if (change>0){
        message = selecteditems + " has been dispensed. R" + change + " has been returned.";
        totalpaid = 0;
        change = 0;
        chips.stock--;
        coke.stock--;
        chocolate.stock--;
        sweets.stock--;

        stockavailable();
        clearform();
        cleartally();
        
        msgE1.innerHTML = message;
    }
    else if (totalpaid==0) {
        message = "Please pay before selecting an item";
        msgE1.innerHTML = message;
    }
    else if (change == 0) {
        message = selecteditems + " has been dispensed. Thank you.";
        totalpaid = 0;
        change = 0;
        chips.stock--;
        coke.stock--;
        chocolate.stock--;
        sweets.stock--;

        stockavailable();
        clearform();
        cleartally();
        
    
        msgE1.innerHTML = message;
        
    }
    function stockavailable(){
        stockDisplay.innerHTML = ("Stock available - " + "items: " + chips.stock);
            
        if (chips.stock==0){
            message = selecteditems + " is out of stock. Money has been returned.";
        }
        else if (coke.stock==0){
            message = selecteditems + " is out of stock. Money has been returned.";
        }
        else if (chocolate.stock==0){
            message = selecteditems + " is out of stock. Money has been returned.";
        }
        else if  (sweets.stock==0){
            message = selecteditems + " is out of stock. Money has been returned.";
        }

    }
        
    }