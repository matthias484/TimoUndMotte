import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export const PaypalCheckout = () => {
  return (
    <PayPalScriptProvider options={{ "client-id": "DEIN_CLIENT_ID" }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: "10.00" } }]
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            console.log("Zahlung abgeschlossen:", details);
          });
        }}
      />
    </PayPalScriptProvider>
  );
}
