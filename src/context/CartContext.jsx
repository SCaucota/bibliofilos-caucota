import { useState, createContext } from "react";

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

    const addProduct = (prod, quantity) => {
        const existingProduct = cart.find(product => product.id === prod.id)

        if (existingProduct) {
            const updateCart = cart.map((product) => 
                product.id === prod.id 
                ? {...product, quantity: product.quantity + quantity}
                : product
            )

            setCart(updateCart);
        } else{
            setCart([...cart, {...prod, quantity}]);
        }

        setQuantityTotal(quantityTotal+quantity);
        setTotal(total + prod.price*quantity);
        setOpenSnack(true);
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
    }

    const deleteProduct = (idProduct) => {
        const prodToDelete = cart.find(product => product.id === idProduct);
        const newCart = cart.filter(product => product.id !== idProduct);
        setCart(newCart);
        setTotal(total-(prodToDelete.price*prodToDelete.quantity));
        setQuantityTotal(quantityTotal-prodToDelete.quantity);
    }

    const emptyCart = () => {
        setCart([]);
        setTotal(0);
        setQuantityTotal(0);
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