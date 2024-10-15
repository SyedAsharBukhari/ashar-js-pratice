
let shopitemsdata = [
    {
        id: 1,
        name: "nike shoes",
        price: "$100",
        description: "this is product",
        img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",

    },
    {
        id: 2,
        name: "adidas shoes",
        price: "$200",
        description: "this is product",
        img: "https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 3,
        name: "jordan shoes",
        price: "$300",
        description: "this is product",
        img: "https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 4,
        name: "air shoes",

        price: "$400",
        description: "this is product",
        img: "https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 6,
        name: "vans shoes",
        price: "$500",
        description: "this is product",
        img: "https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 7,
        name: "noka shoes",
        price: "$300",
        description: "this is product",
        img: "https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 8,
        name: "air shoes",
        price: "$400",
        description: "this is product",
        img: "https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 9,
        name: "nike shoes",
        price: "$100",
        description: "this is product",
        img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",

    },
];



const shop = document.getElementById("shop")
let basket = JSON.parse(localStorage.getItem('data')) || []


let generateShop = () => {
shop.innerHTML = shopitemsdata.map((x) => {

let {id, name, price, description, img} = x


        return `
<div class="shop_item">
    <img src="${img}" alt=""/>
    <div class="product_info">
        <h5>${name}</h5>
        <p>${price}</p>
        <p>${description}</p>
        <button onClick ="addtocart('${id}','${name}','${price}','${img}')">add to cart</button>
        </div>
    </div>
`
    })
}



function addtocart(id, name, price, img) {

    let storeDataIntoLocalStroge = {
        id: id,
        name: name,
        price: price,
        img: img

    }

    basket.push(storeDataIntoLocalStroge)

    localStorage.setItem('data', JSON.stringify(basket))


    calculate();
}



let calculate = () => {
    let cart_amount = document.getElementById("cart_amount");
    let basketlength = basket.length

    cart_amount.innerHTML = basketlength
}


generateShop()
calculate();

