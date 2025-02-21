import { useState, createContext, useEffect } from "react";

export const CartContext = createContext({
    cart:[],
    total:0,
    quantityTotal:0
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [quantityTotal, setQuantityTotal] = useState(0);
    const [openSnack, setOpenSnack] = useState(false);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart'));
        if (!savedCart) {
            const initialCart = { cart: cart, total: total, quantityTotal: quantityTotal };
            localStorage.setItem('cart', JSON.stringify(initialCart));
        } else {
            setCart(savedCart.cart);
            setTotal(savedCart.total);
            setQuantityTotal(savedCart.quantityTotal);
        }
    }, [])

    const addProduct = (prod, quantity) => {
        const existingProduct = cart.find(product => product.id === prod.id)
        let updatedCart
        if (existingProduct) {
            updatedCart = cart.map((product) => 
                product.id === prod.id 
                ? {...product, quantity: product.quantity + quantity}
                : product
            )

            setCart(updatedCart);
        } else{
            updatedCart = [...cart, {...prod, quantity}];
            setCart(updatedCart)
        }
        const newQuantityTotal = quantityTotal+quantity
        const newTotal = total + prod.price*quantity
        setQuantityTotal(newQuantityTotal);
        setTotal(newTotal);
        setOpenSnack(true);
        localStorage.setItem("cart", JSON.stringify({cart: updatedCart, total: newTotal, quantityTotal: newQuantityTotal}));
    }

    const updateQuantity = (id, newQuantity) => {
        const updatedCart = cart.map((product) => 
            product.id === id 
                ? { ...product, quantity: newQuantity }
                : product
        );

        setCart(updatedCart);

        const newTotal = updatedCart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
        const newQuantityTotal = updatedCart.reduce((acc,prod) => acc + prod.quantity, 0);

        setTotal(newTotal);
        setQuantityTotal(newQuantityTotal);
        localStorage.setItem("cart", JSON.stringify({cart: updatedCart, total: newTotal, quantityTotal: newQuantityTotal}));
    }

    const deleteProduct = (idProduct) => {
        const prodToDelete = cart.find(product => product.id === idProduct);
        const newCart = cart.filter(product => product.id !== idProduct);
        const newTotal = total-(prodToDelete.price*prodToDelete.quantity)
        const newQuantityTotal = quantityTotal-prodToDelete.quantity
        setCart(newCart);
        setTotal(newTotal);
        setQuantityTotal(newQuantityTotal);
        localStorage.setItem("cart", JSON.stringify({cart: newCart, total: newTotal, quantityTotal: newQuantityTotal}));
    }

    const emptyCart = () => {
        setCart([]);
        setTotal(0);
        setQuantityTotal(0);
        localStorage.setItem("cart", JSON.stringify({cart: [], total: 0, quantityTotal: 0}));
    }

    const formatPrice = (price) => {
        const formattedPrice = price.toLocaleString('es-ES', {
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        });
    
        return formattedPrice;
    }

    return (
        <CartContext.Provider 
            value={{
                cart,
                total,
                addProduct,
                quantityTotal,
                deleteProduct,
                emptyCart,
                updateQuantity,
                formatPrice,
                setQuantityTotal,
                openSnack,
                setOpenSnack
            }}>
            {children}
        </CartContext.Provider>
    )
}