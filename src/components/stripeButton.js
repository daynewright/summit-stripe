import * as React from "react"

const StripeButton = ({ buttonId }) => {
  return (
    <stripe-buy-button
      style={{
        margin: "10px 20px",
        border: ".5px solid grey",
        borderRadius: "5px",
      }}
      buy-button-id={buttonId}
      publishable-key={process.env.STRIPE_PUBLISHABLE_KEY}
    />
  )
}

export default StripeButton
