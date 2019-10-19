'use strict';
var hour = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

var container = document.getElementById('content-area');



var table = document.createElement('table');
container.appendChild(table);

function addElement(tagName, container, text) {
    var element = document.createElement(tagName);
    container.appendChild(element);
    if (text) {
        element.textContent = text;
    }
    return element;
}


function Shop(location, minimum, maximum, average) {
    this.location = location;
    this.minimum = minimum;
    this.maximum = maximum;
    this.averagecookie = average;
    this.cookNumArr = [];
    this.totalSale = 0;
    this.generateHourlySales();
}


Shop.prototype.averageNumCus = function () {
    var rang = this.maximum - this.minimum;
    var rand = Math.random() * rang + this.minimum;
    return Math.ceil(rand);
};
Shop.prototype.generateHourlySales = function () {
    for (var i = 0; i < hour.length; i++) {
        var cookEachHour = Math.ceil(this.averageNumCus() * this.averagecookie)
        this.cookNumArr.push(cookEachHour);
        this.totalSale += cookEachHour;
    }
};


Shop.prototype.renderRow = function (table) {
    var shopRow = addElement('tr', table);
    addElement('td', shopRow, this.location);
    for (var i = 0; i < this.cookNumArr.length; i++) {
        var currentHourlySales = this.cookNumArr[i];
        addElement('td', shopRow, currentHourlySales);
    }
    addElement('td', shopRow, this.totalSale);
};


function headerRow() {
    var hourRow = addElement('tr', table);
    addElement('th', hourRow);
    for (var i = 0; i < hour.length; i++) {
        addElement('th', hourRow, hour[i]);
    }
    addElement('th', hourRow, 'Daily Location Totals');
}

var footerRow = null;
function createfooterRow() {
    var tr = document.createElement('tr');
    // var footerRow = tr;
    tr.setAttribute("id", "totals");
    table.appendChild(tr);
    var td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = 'Totals';
    var megaTotal = 0;
    for (var hourIndex = 0; hourIndex < hour.length; hourIndex++) {
        td = document.createElement('td');
        tr.appendChild(td);
        var totalhourales = 0; 
        for (var shopIndex = 0; shopIndex < shops.length; shopIndex++) {
            var shop = shops[shopIndex];
            totalhourales += shop.cookNumArr[hourIndex];
        }
        td.textContent = totalhourales;
        megaTotal += totalhourales;
    }
    td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = megaTotal;
    
}


var shops = [];
shops.push(new Shop('seattle', 23, 65, 6.3));
shops.push(new Shop('tokyo', 3, 24, 1.2));
shops.push(new Shop('dubai', 11, 38, 3.7));
shops.push(new Shop('paris', 20, 38, 2.3));
shops.push(new Shop('lima', 2, 16, 4.6));


headerRow();
for (var i = 0; i < shops.length; i++) {
    var currentShop = shops[i];
    currentShop.renderRow(table);
}
createfooterRow();

function submit (event) {
   
event.preventDefault();
var form = document.getElementById('addShopForm');
var location= (form.elements.namedItem("Location").value);

var minimum = parseInt(form.elements.namedItem("Minimum").value);
var maximum= parseInt(form.elements.namedItem("Maximum").value);
var avgSales = parseFloat(form.elements.namedItem("avgSales").value);
var newShop = new Shop(location, minimum, maximum, avgSales);
shops.push(newShop);
var footerRow = document.getElementById("totals");
footerRow.parentElement.removeChild(footerRow); 

newShop.renderRow(table);
createfooterRow();

}


var form1 = document.getElementById('addShopForm');
form1.addEventListener('submit', submit);