const solutionDiv = document.getElementById('solution');
function Product(name, price, category){
    const div = document.createElement("div");
    div.innerHTML = `Product name: ${name} <br> Price: ${price} <br> Category: ${category}`
    div.style.backgroundColor = "yellow";
    div.style.padding = "10px";
    div.style.borderRadius = "5px";
    div.style.marginBottom = "10px";
    div.addEventListener("mouseenter", function(){
        div.style.boxShadow = "2px 2px 5px #000";
    })
    div.addEventListener("mouseleave", function(){
        div.style.boxShadow = null;
    })
    this.name = name;
    this.price = price;
    this.category = category;
    this.htmlelement = div;
}

function addProductToPage(product) {
    solutionDiv.appendChild(product.htmlelement);
}

function getCostliest(arrItems) {
    console.log(typeof arrItems);
    console.log(arrItems);
    if(arrItems.length == 0){
        return;
    }
    var costliest = arrItems[0];
    for(var item in arrItems){
        if(item.price > costliest.price) costliest = item;
    }
    var info = document.createElement("div");
    info.innerText = "Price of costliest product is " + costliest.price;
    info.style.borderWidth = "2px";
    info.style.borderStyle = "solid";
    info.style.fontSize = "16px";
    info.style.padding = "10px";
    solutionDiv.appendChild(info);
}

Product.prototype.getDiscountedPrice = function(percent) {
    var discountValue = Number(percent) * this.price/100;
    return this.price - discountValue;
};


(function(){
    var apple = new Product("Apple", 200, "Fruits");
    var banana = new Product("Banana", 40, "Fruits")
    var charger = new Product("Charger", 200, "Electronics")
    var coke = new Product("Coke", 60, "Beverages")
    var arrItems = new Array(apple,banana,charger,coke)
    getCostliest.call(null,arrItems);
    addProductToPage(apple)
    addProductToPage(banana)
    addProductToPage(charger)
    addProductToPage(coke)
})()
