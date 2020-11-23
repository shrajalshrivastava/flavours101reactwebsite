import React, {createContext, useState, useEffect} from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            "_id":"1",
             "title": "Sandwich",
             "images": "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHNhbmR3aWNofGVufDB8fDB8&auto=format&fit=crop&w=500&q=60",
             "description": " Grilled on white bread, contains onions, and a blend of tomato ketchup, mustard, and curry powder.",
             "price": 60,
             "count": 1
         },
         {
            "_id":"2",
             "title": "Biryani",
             "images": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8YmlyeWFuaXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
             "description": "Biryani is a delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, and flavorful saffron rice. ",
             "price": 130,
             "count": 1
         },
         {
            "_id":"3",
             "title": "Pizza",
             "images": "https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBpenphfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60",
             "description": " Pizza  consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives,onions, mozzarella cheese. ",
             "price": 150,
             "count": 1
         },
         {
            "_id":"4",
             "title": "French Fries",
             "images": "https://images.unsplash.com/photo-1491449347753-6b0223fb6931?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8ZnJlbmNoJTIwZnJpZXN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
             "description": " Fried Potatos with a blend of tomato ketchup and a pinch of salt and black paper.",
             "price": 50,
             "count": 1
         },
         {
            "_id":"5",
             "title": "Burger",
             "images": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60",
             "description": "The Burger contains  onions, and a blend of tomato ketchup, mustard, and curry powder.",
             "price": 70,
             "count": 1
         },
         {
            "_id":"6",
             "title": "Fruit Salad",
             "images": "https://images.unsplash.com/photo-1564093497595-593b96d80180?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTEwfHxmcnVpdCUyMHNhbGFkfGVufDB8fDB8&auto=format&fit=crop&w=500&q=600",
             "description": "A Mixture of strawberries Kiwi Grapes Blueberries Pineapple Banana and Water Melon.",
             "price": 90,
             "count": 1
         },
         {
            "_id":"7",
             "title": "Dosa",
             "images": "https://tse1.mm.bing.net/th?id=OIP._icUVN45p9pM-Rxx9IZGpgHaEJ&pid=Api&P=0&w=272&h=153",
             "description": " Crispy, Savory Pancakes that are made from soaked and drained rice and fenugreek seeds",
             "price": 60,
             "count": 1
         },
         {
            "_id":"8",
             "title": "Paneer Chilly",
             "images": "https://www.spiceupthecurry.com/wp-content/uploads/2015/03/chilli-paneer-dry-recipe-9.jpg",
             "description": "Paneer Chilly is tossed in a flavorful spicy sauce made with soy sauce, chili sauce and vinegar ",
             "price": 100,
             "count": 1
         },
         {
            "_id":"9",
             "title": "Pancake",
             "images": "https://images.unsplash.com/photo-1587339144367-f1cacbecac82?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGFuY2FrZXN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
             "description": " A thin flat cake made from batter and fried on both sides,  served rolled and filled with a sweet or savoury mixture.",
             "price": 60,
             "count": 1
         }
         
         
    ])

    const [cart, setCart] = useState([])

    const addCart = (id) =>{
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            setCart([...cart, ...data])
        }else{
            alert("The product has been added to cart.")
        }
    }

    useEffect(() =>{
       const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
       if(dataCart) setCart(dataCart)
    },[])

    useEffect(() =>{
        localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])


    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
    }

    
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}
