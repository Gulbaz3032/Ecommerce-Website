const product = [
    {
        id: 0,
        image: 'image/ii-1.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 1,
        image: 'image/hh-1.jpg',
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 2,
        image: 'image/ee-1.jpg',
        title: '250D DSLR Camera',
        price: 230,
    },
    {
        id: 3,
        image: 'image/cc-1.jpg',
        title: 'Head Phones',
        price: 100,
    },
    {
        id: 4,
        image: 'image/aa-1.jpg',
        title: 'Head Phones',
        price: 100,
    },
    {
        id: 5,
        image: 'image/ff-1.jpg',
        title: 'Lamp',
        price: 50,
    },
    {
        id: 6,
        image: 'image/gg-1.jpg',
        title: 'Vivo',
        price: 130,
    },
    {
        id: 7,
        image: 'image/cc-1.jpg',
        title: 'Head Phones',
        price: 100,
    },
 
 
 
 
];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var {image, title, price} = item;
        return(
            `<div class='box'>
            <div class='img-box'>
            <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
        )
    }).join('')

    var cart = [];

    function addtocart(a) {
        cart.push({...categories[a]});
        displaycart();
    }
    function delElement(a) {
        cart.splice(a, 1);
        displaycart();
    }

    function displaycart() {
        let total = 0;
        let j = 0;
        document.getElementById("count").innerHTML = cart.length;
        if (cart.length == 0) {
            document.getElementById('cartItem').innerHTML = "Your Cart is empty";
            document.getElementById("total").innerHTML = "$ " + 0 + ".00";
        } else {
            document.getElementById("cartItem").innerHTML = cart.map((item) => {
                var { image, title, price } = item;
                total = total + price;
                return (
                    `<div class='cart-item'>
                        <div class='row-img'>
                            <img class='rowimg' src=${image}>
                        </div>
                        <p style='font-size: 12px;'>${title}</p>
                        <h2 style='font-size: 15px;'>$ ${price}.00</h2>
                        <i class='fa-solid fa-trash' onclick='delElement(${j++})'></i>
                    </div>`
                );
            }).join('');
            document.getElementById("total").innerHTML = "$ " + total + ".00";
        }
    }
    