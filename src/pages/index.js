import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Script } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import StripeButton from "../components/stripeButton"

import * as styles from "../components/index.module.css"

const IndexPage = () => {
  const [isDesktop, setDesktop] = React.useState(false)

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setDesktop(window.innerWidth > 768)
    }
  }, [])

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
          <h1>{isDesktop && "Options for"} Student Band Program 🎺</h1>
          <p>
            This is a monthly payment until the total of <b>$775</b> is reached.
            If you have multiple children in band, you will need to set up a
            payment for each child separately.
          </p>
          <div className={styles.sectionButtons}>
            <StripeButton
              buttonId="buy_btn_1PCk3oHaK9Zw5GBQUcMR7ioQ"
              headerText="Pay in full"
            />
            <StripeButton
              buttonId="buy_btn_1PCk9SHaK9Zw5GBQbt3BCJGz"
              headerText="$260 monthly for 3 months"
            />
            <StripeButton
              buttonId="buy_btn_1PCkAcHaK9Zw5GBQoOLagEGV"
              headerText="$130 monthly for 6 months"
            />
          </div>
        </div>
        {!isDesktop && <div className={styles.line} />}
        <div className={styles.sectionContainer}>
          <h1>{isDesktop && "Options for"} Student Meal Plan 🍽️</h1>
          <h3 className={styles.dueDate}>
            <b>*DUE by Friday, June 28th*</b>
          </h3>
          <p>
            This will cover the meal plan for the band season and band camp. The
            total cost is <b>$260</b> and can be paid over two months or in one
            single payment.
          </p>
          <div className={styles.sectionButtons}>
            <StripeButton
              buttonId="buy_btn_1PCkBpHaK9Zw5GBQWdbXW2jw"
              headerText="Pay in full"
            />
            <StripeButton
              buttonId="buy_btn_1PCkCjHaK9Zw5GBQeBOOLDGZ"
              headerText="$130 monthly for 2 months"
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
