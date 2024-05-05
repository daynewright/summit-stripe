import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Script } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import StripeButton from "../components/stripeButton"

import * as styles from "../components/index.module.css"

const IndexPage = () => {
  return (
    <Layout>
      <Script async src="https://js.stripe.com/v3/buy-button.js"></Script>
      <div className={styles.textCenter}>
        <StaticImage
          src="../images/logo.png"
          loading="eager"
          width={105}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
        <h1>
          Welcome to the <b>Summit Band!</b>
        </h1>
        <p className={styles.intro}>
          <br />
          Thank you for your willingness to donate to the band to help us have
          an amazing season! 🎉
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15px",
          }}
        >
          <p></p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.sectionContainer}>
          <h1>Donation Options</h1>
          <p>
            Thank you for responding to our letter writing campaign! You can use
            one of the options below to donate a single amount, monthly or
            quartly amount.
          </p>
          <div className={styles.sectionButtons}>
            <StripeButton
              buttonId="buy_btn_1PD8iQHaK9Zw5GBQSqqga0hZ"
              headerText="Single amount donation"
            />
            <StripeButton
              buttonId="buy_btn_1PD8oDHaK9Zw5GBQRq0WPBv8"
              headerText="$25 monthly donation"
            />
            <StripeButton
              buttonId="buy_btn_1PD8slHaK9Zw5GBQQJ1YEh6e"
              headerText="$50 quarterly donation"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Summit Band Donation" />

export default IndexPage
