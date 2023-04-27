import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"

import Header from "@/components/Header"
import Layout from "@/components/Layout"
import Seo from "@/components/Seo"
import SignupForm from "@/components/SignupForm"
import useContent from "@/hooks/useContent"

const IndexPage = () => {
  const [selectedBackground, setSelectedBackground] = useState(null)
  const { homepage } = useContent()
  const { backgrounds } = homepage

  // NOTE: Will random select a number to use as the background image
  useEffect(() => {
    const NUM_OF_IMAGES = 7 // Set to number of images in homepage.yml
    const randomNum = Math.floor(Math.random() * NUM_OF_IMAGES)
    const result = backgrounds[randomNum]

    setSelectedBackground(result)
  }, [backgrounds])

  return (
    <Layout>
      <Header hideLogo />
      <main className="relative">
        <figure className="absolute inset-0 pointer-events-none bg-primary">
          <cite className="absolute not-italic bottom-4 left-5 opacity-40">
            <a
              href={selectedBackground?.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white no-underline transition-colors hover:text-pink-500"
            >
              Photo by {selectedBackground?.author}
            </a>
          </cite>
          <GatsbyImage
            image={getImage(selectedBackground?.media)}
            className="object-cover w-full h-full opacity-20 mix-blend-overlay"
            placeholder="blurred"
            layout="fullWidth"
            alt=""
          />
        </figure>

        <div className="container relative flex flex-col items-center justify-center mb-16 sm:mb-0 sm:h-[calc(100dvh-3.75rem)]">
          <h1 className="text-7xl sm:text-8xl tracking-tighter leading-relaxed drop-shadow-sm mb-2.5">
            <strong className="font-bold font-heading">YYJ</strong>
            <span className=" font-heading !font-thin ml-2 sm:ml-4 ">Tech</span>
          </h1>
          <p className="px-5 text-xl leading-7 text-center sm:px-0 md:max-w-xl">
            {homepage.intro}
          </p>

          <SignupForm className="mt-10" />
        </div>
      </main>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo />

export default IndexPage
