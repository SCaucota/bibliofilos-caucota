import React, { useContext, useEffect, useState } from "react";
import { db } from "../../services/config";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc, getDoc, updateDoc, doc } from "firebase/firestore";
import {
  backdropClasses,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./checkout.css";

const Checkout = () => {
  const { cart, emptyCart, total, setQuantityTotal, formatPrice } =
    useContext(CartContext);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [repeatEmail, setRepeatEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardOwner, setCardOwner] = useState("");
  const [shippingMethod, setShippingMethod] = useState("");
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (orderId) {
      Swal.fire({
        title: "¡Éxito!",
        text: `Tu compra se realizó exitosamente. Tu número de orden es: ${orderId}`,
        icon: "success",
        draggable: true,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    }
  }, [orderId]);

  const cancelPurchase = () => {
    emptyCart();
    setQuantityTotal(0);
    navigate("/");
  };

  const manageForm = (event) => {
    event.preventDefault();

    if (
      !name ||
      !lastname ||
      !email ||
      !repeatEmail ||
      !address ||
      !phoneNumber ||
      !cardNumber ||
      !cardOwner
    ) {
      setError("Campos incompletos");
      return;
    }

    if (email !== repeatEmail) {
      setError("El email no coincide");
      return;
    }

    if (!shippingMethod) {
      setError("Debe seleccionar un método de envío");
      return;
    }

    const order = {
      products: cart.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: product.quantity,
      })),
      total: total,
      date: new Date(),
      name,
      lastname,
      email,
      phoneNumber,
      shippingMethod,
      status: "generada",
    };

    Promise.all(
      order.products.map(async (productOrder) => {
        const productRef = doc(db, "products", productOrder.id);
        const productDoc = await getDoc(productRef);
        const stockActual = productDoc.data().stock;

        await updateDoc(productRef, {
          stock: stockActual - productOrder.quantity,
        });
      })
    )
      .then(() => {
        return addDoc(collection(db, "orders"), order);
      })
      .then((docRef) => {
        setOrderId(docRef.id);
        emptyCart();
      })
      .catch((error) => {
        console.error(
          "Error en la actualización del stock o creación de orden:",
          error
        );
        setError("Hubo un problema con la compra");
      });
  };

  return (
    <div>
      <h1>Checkout</h1>
      <div className="checkoutContainer">
        <div>
          <h2>Resúmen de Compra</h2>
          {cart.map((product) => (
            <div className="cardCheckout" key={product.id}>
              <img src={product.image} alt={product.id} />
              <div>
                <h2>{product.title}</h2>
                <p>Cantidad: {product.quantity}</p>
                <h5> c/u ${formatPrice(product.price)}</h5>
              </div>
              <h3>${formatPrice(product.price * product.quantity)}</h3>
            </div>
          ))}
        </div>
        <form className="formCheckout" action="" onSubmit={manageForm}>
          <div>
            <h2>Métodos de envio</h2>
            <div>
              <RadioGroup
                value={shippingMethod}
                onChange={(e) => setShippingMethod(e.target.value)}
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Andreani"
                  control={<Radio />}
                  label={
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <img
                        className="imgMethodSend"
                        src="https://res.cloudinary.com/dcwuqrvuv/image/upload/v1740006676/az9eaou6vmeudx3a8mvz.png"
                        alt="Andreani"
                        width="50"
                        height="50"
                        style={{ borderRadius: "5px" }}
                      />
                      <span> - Llega en 2-3 días hábiles ($4500)</span>
                    </div>
                  }
                />
                <FormControlLabel
                  value="Correo Argentino"
                  control={<Radio />}
                  label={
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <img
                        className="imgMethodSend"
                        src="https://res.cloudinary.com/dcwuqrvuv/image/upload/v1740006733/o4fea79zvjez8bx29doo.jpg"
                        alt="Correo Argentino"
                        width="50"
                        height="50"
                        style={{ borderRadius: "5px" }}
                      />
                      <span> - Llega en 3-5 días hábiles ($3500)</span>
                    </div>
                  }
                />
              </RadioGroup>
            </div>
          </div>
          <div>
            <h2>Datos Personales</h2>
            <p>Ingrese sus datos personales para poder generar su compra</p>
            <div className="personalDataContainer">
              <TextField
                onChange={(e) => setName(e.target.value)}
                id="outlined-basic"
                label="Nombre"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setLastname(e.target.value)}
                id="outlined-basic"
                label="Apellido"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setRepeatEmail(e.target.value)}
                id="outlined-basic"
                label="Repetir Email"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setAddress(e.target.value)}
                id="outlined-basic"
                label="Dirección"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setPhoneNumber(e.target.value)}
                id="outlined-basic"
                label="Teléfono"
                variant="outlined"
              />
            </div>
            <h2>Datos de Tarjeta</h2>
            <div className="personalDataContainer">
              <TextField
                onChange={(e) => setCardNumber(e.target.value)}
                id="outlined-basic"
                label="Número de Tarjeta"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setCardOwner(e.target.value)}
                id="outlined-basic"
                label="Titular"
                variant="outlined"
              />
            </div>
            {error && <p className="errorText">*{error}</p>}
            <h2>Total: ${total}</h2>
            <div className="buttonsFormContainer">
              <Button
                btnError={"buttonError"}
                btnText={"Cancelar"}
                action={() => cancelPurchase()}
              />
              <button className="btn" type="submit">
                Finalizar Compra
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
