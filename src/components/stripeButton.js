import * as React from "react"

import * as styles from "../components/index.module.css"

const StripeButton = ({ buttonId, headerText }) => {
  return (
    <div className={styles.stripeButtonContainer}>
      <h3 className={styles.stripeButtonHeader}>{headerText ?? "  "}</h3>
      <stripe-buy-button
        style={{
          margin: "10px 20px",
          border: ".5px solid grey",
          borderRadius: "5px",
        }}
        buy-button-id={buttonId}
        publishable-key={process.env.STRIPE_PUBLISHABLE_KEY}
      />
    </div>
  )
}

export default StripeButton
