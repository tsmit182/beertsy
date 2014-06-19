
// var images, title, cost, currency;

// etsyitems.results.forEach(function (a) {
//     images = '<div class= "images">' + "<img src=" + a.Images[0].url_570xN'>"
// }

//     title = '<div class = "title">'

// var pics, title, currency, price

// etsyitems.results.forEach(function(a) {
//      pics = '<div class="images">' + '<img src="' + a.Images[0].url_570xN + '" style="width: 250px; height: 200px;"/></div>';
//      title = '<div class="title">' + a.title + '</div>';
//      currency = '<div class="money">' + a.currency_code + '</div>';
//      price = '<div class="price">' + '$' + a.price + '</div>';
//      $('.results').append('<div class="box">' + pics + title + currency + price  + '</div>');
// });



// etsyitems.results.forEach( function (a){
// console.log(a.title)
// console.log(a.price)
// });



var pics, title, price, currency;
etsyitems.results.forEach( function (a) {
    pics = '<img src=' + a.Images[0].url_170x135 + ' />' + '<br />';
    title = a.title + " " + '<br />';
    price = a.price + " ";
    currency = a.currency_code + '<br /><br />';
    $('.container').append('<div class="box">' + pics + title + price + currency + '</div>');
});

    // if(title.length > 25) {
    //       $link.title(title.substring(0, 21) + "...");
    //    }

//so I tried this:
// changing "title" as follows:
//    title = a.title.substring(0,21) + "...");
// which removed everything... so i tried adding the following:
//     title = title.substring(0,21) + "...");
// which also removed everything.