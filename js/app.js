var Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
'1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var seattle = {
TheMin: 23,
TheMax: 65,
TheAv: 6.3,
cookiesArray: [],
Ramdom: function () {
    var range = this.TheMax - this.TheMin;
    var rand = Math.floor(Math.random() * range) + this.TheMin;
    return rand;
},
amountOfCookiesPerHourFunction: function () {
    for (i = 0; i < 15; i++) {
        this.amountOfCookiesCeil = Math.ceil(this.TheAv * this.Ramdom());
        this.cookiesArray.push(this.amountOfCookiesCeil);
    }
    return this.cookiesArray;
},
}
seattle.amountOfCookiesPerHourFunction();
var Tokyo = {
TheMin: 3,
TheMax: 24,
TheAv: 1.2,
cookiesArray: [],
Random: function () {
    var range = this.TheMax - this.TheMin;
    var rand = Math.floor(Math.random() * range) + this.TheMin;
    return rand;
},
amountOfCookiesPerHourFunction: function () {
    for (i = 0; i < 15; i++) {
        this.amountOfCookiesCeil = Math.ceil(this.TheAv * this.Random());
        this.cookiesArray.push(this.amountOfCookiesCeil);
    }
    return this.cookiesArray;
},
}
Tokyo.amountOfCookiesPerHourFunction();
var Dubai = {
TheMin: 11,
TheMax: 38,
TheAv: 3.7,
cookiesArray: [],
Random: function () {
    var range = this.TheMax - this.TheMin;
    var rand = Math.floor(Math.random() * range) + this.TheMin;
    return rand;
},
amountOfCookiesPerHourFunction: function () {
    for (i = 0; i < 15; i++) {
        this.amountOfCookiesCeil = Math.ceil(this.TheAv * this.Random());
        this.cookiesArray.push(this.amountOfCookiesCeil);
    }
    return this.cookiesArray;
},
}
Dubai.amountOfCookiesPerHourFunction();
var Paris = {
TheMin: 20,
TheMax: 38,
TheAv: 2.3,
cookiesArray: [],
Random: function () {
    var range = this.TheMax - this.TheMin;
    var rand = Math.floor(Math.random() * range) + this.TheMin;
    return rand;
},
amountOfCookiesPerHourFunction: function () {
    for (i = 0; i < 15; i++) {
        this.amountOfCookiesCeil = Math.ceil(this.TheAv * this.Random());
        this.cookiesArray.push(this.amountOfCookiesCeil);
    }
    return this.cookiesArray;
},
}
Paris.amountOfCookiesPerHourFunction();
var Lima = {
TheMin: 2,
TheMax: 16,
TheAv: 4.6,
cookiesArray: [],
Random: function () {
    var range = this.TheMax - this.TheMin;
    var rand = Math.floor(Math.random() * range) + this.TheMin;
    return rand;
},
amountOfCookiesPerHourFunction: function () {
    for (i = 0; i < 15; i++) {
        this.amountOfCookiesCeil = Math.ceil(this.TheAv * this.Random());
        this.cookiesArray.push(this.amountOfCookiesCeil);
    }
    return this.cookiesArray;
},
}
Lima.amountOfCookiesPerHourFunction();
arrayall = ["seattle", "Tokyo", "Dubai", "Paris", "Lima"];
arrayall1 = [seattle, Tokyo, Dubai, Paris, Lima];
for (let j = 0; j < arrayall.length; j++) {
var count = 0;
document.write("<h2>", "* ", arrayall[j], "</h2>");
document.write("<ul>");
for (i = 0; i < 15; i++) {
    count += arrayall1[j].cookiesArray[i];
    document.write("<li>");
    document.write(Hours[i], ": ", arrayall1[j].cookiesArray[i], " Cookies.");
    document.write("<br>");
    document.write("</li>");
}
document.write("<li>", "Total : ", count, " Cookies.");
document.write("  </ul>");
}