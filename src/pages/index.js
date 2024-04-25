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
          You can pay for your child's program and meal plan here! 🎉
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
          <h2>Options for Student Band Program 🎺</h2>
          <p>
            This is a monthly payment until the total of <b>$750</b> is reached.
            If you have multiple children in band, you will need to set up a
            payment for each child separately.
          </p>
          <div className={styles.sectionButtons}>
            <StripeButton buttonId="buy_btn_1P9ItWHaK9Zw5GBQ2LWrXUR2" />
            <StripeButton buttonId="buy_btn_1P9Qn9HaK9Zw5GBQmwl1KbQ7" />
          </div>
        </div>
        <div className={styles.verticalLine} />
        <div className={styles.sectionContainer}>
          <h2>Options for Student Meal Plan 🍽️</h2>
          <p>
            This is a one time payment for the meal plan. If you have multiple
            children in band, you will need to set up a payment for each child
            separately.
          </p>
          <div className={styles.sectionButtons}>
            <StripeButton buttonId="buy_btn_1P9UgSHaK9Zw5GBQaQebGHbU" />
            <StripeButton buttonId="buy_btn_1P9UfVHaK9Zw5GBQvopwgNrK" />
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
