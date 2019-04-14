import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BuyNow from "../components/ppButton"
import Cars from "../components/cars"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      <BuyNow />
      <p>NZD $60.00</p>
      <Cars />
    </div>

    <div>
      <h3>About the product</h3>
      <ul>
        <li>
          NUMBER 1 EXFOLIATOR IN JAPAN: Cure Natural Aqua Gel is the #1
          exfoliator in Japan, selling 1 bottle every 12 seconds. Cure's status
          as a cult hit and Japanese beauty product legend stems from the simple
          fact that Cure does what it promises: exfoliates gently and
          effectively, without any harsh chemicals.{" "}
        </li>
        <li>
          ACTIVATED HYDROGEN WATER FORMULA: General chemical peeling use strong
          acids (approx. pH1.3) to dissolve protein. Natural Aqua Gel Cure, on
          the other hand, gently catches waste dead skin on the surface of the
          skin and removes it with a unique activated hydrogen water formula.
        </li>
        <li>
          GENTLE & EFFECTIVE: Cure Natural Aqua Gel exfoliates your skin gently
          and effectively. There is no need to rub or scrub your skin too hard.
          Its unique and gentle formula is suitable to all skin types, even the
          most sensitive. You will be surprised that your skin is so much
          smoother! TRY IT ON YOUR BODY: Cure Natural Aqua Gel can also be used
          on your hands, neck, low-neck, elbows, heels, etc. A bottle shall last
          approximately four months if used for the entire body.{" "}
        </li>
        <li>
          PRESERVATIVE-FREE: Made in Japan, Natural Aqua Gel Cure is a very
          simple product as approximately 91% of it, is water. This gentle
          exfoliant gel is also scent-free, color-free, and preservative-free.
        </li>
      </ul>
      <h3>Product description</h3>
      <p>
        Cure Natural Aqua Gel is the #1 exfoliator in Japan, selling 1 bottle
        every 12 seconds. Cure's status as a cult hit and Japanese beauty
        product legend stems from the simple fact that Cure does what it
        promises: exfoliates gently and effectively, without any harsh
        chemicals. There is no need to rub or scrub your skin too hard. Its
        unique and gentle formula is suitable to all skin types, even the most
        sensitive. You will be surprised that your skin is so much smoother!
        Made in Japan, Natural Aqua Gel Cure is a very simple product as
        approximately 91% of it, is water. General chemical peelings usually use
        strong acids (approx. pH1.3) to dissolve protein. Natural Aqua Gel Cure,
        on the other hand, gently catches waste dead skin on the surface of the
        skin and removes it with a unique activated hydrogen water formula. This
        gentle exfoliant gel is also scent-free, color-free, and
        preservative-free.{" "}
      </p>
      <ul>
        <li>* Suitable for all skin types </li>
        <li>
          * Can be used on all your body * Can be applied on sensitive skin
        </li>
        <li>* Gentle & effective * Activated hydrogen water formula.</li>
        <li>* Number 1 exfoliator in Japan</li>
        <li>* 91% of Cure Natural Aqua Gel is water</li>
        <li>* Scent-free, color-free, and preservative-free </li>
      </ul>
      <h3>How to use</h3>
      <p>
        Wash face thoroughly with soap and water. Dry face well. Pump the bottle
        3 to 5 times until you have an appropriate amount of gel on your finger.
        Apply the gel to the skin on your face, neck, or other areas that are
        dry and rough. Gently massage when the gel becomes white (do not rub
        skin too hard). Rinse well after you see results. Use lotion or skin
        cream that you normally use. For best results, apply twice a week.
      </p>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage
