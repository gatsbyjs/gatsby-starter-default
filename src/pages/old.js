import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import { truncate } from "lodash"
import chunk from "lodash/chunk"
import albumStyle from "../components/album.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const [count, setCount] = useState(5)

  return (
    <Layout>
      <SEO title="Home" />

      <div>
        <div className={`${albumStyle.slope}`} />
        <div
          className=" max-w-lg md:max-w-2xl pl-16 pt-16 pr-16 md:flex md:justify-end 
      md:flex-row-reverse m-auto md:pl-4 md:pr-4 lg:max-w-3xl xl:max-w-5xl  xl:m-auto relative mdx:pt-24 lgx:max-w-960 lgx:px-12  xl-mx-0"
        >
          <div className="md:ml-8 md:mt-3">
            <div className="text-2xl font-medium md:text-3xl md:font-semibold text-gray-100">
              Boys In The Cave
            </div>
            <div className="text-xs mt-1 md:text-base text-gray-100">
              By Boys In The Cave
            </div>
            <ul className="md:flex mt-6 hidden text-gray-100">
              <li className="mr-8">t</li>
              <li className="mr-8">t</li>
              <li className="mr-8">t</li>
            </ul>
          </div>
          <img
            src={`http://static.libsyn.com/p/assets/5/f/a/a/5faa38cd4c3c1891/itunes_BITC_DP-FullLogo.png`}
            alt="pod hero"
            className={`md:w-275 md:h-275 mt-5 rounded-lg mdx:w-250 mdx:h-250 xl:h-335 xl:w-335 ${
              albumStyle.shadow
            }`}
          />
        </div>

        <div className="md:hidden">
          <ul className="flex justify-center mt-6">
            <li className="w-8 ml-6 mr-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Podcasts_%28iOS%29.svg"
                alt="apple"
              />
            </li>
            <li className="w-8 ml-6 mr-6">
              <img
                src="https://www.svgrepo.com/show/135807/soundcloud.svg"
                alt="spotify"
              />
            </li>
            <li className="w-8 ml-6 mr-6">
              {" "}
              <img
                src="https://cdn.worldvectorlogo.com/logos/google-podcasts.svg"
                alt="spotify"
              />
            </li>
            <li className="w-8 ml-6 mr-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
                alt="spotify"
              />
            </li>
          </ul>
        </div>

        <div className="hidden md:block">
          <div className="text-center w-full text-gray-700 text-xl mt-24 mb-10">
            Listen in your favourite app
          </div>
          <ul className="flex justify-around max-w-2xl ml-auto mr-auto mdx:max-w-3xl">
            <li className="flex">
              <button
                className={`py-6 px-6 rounded-lg inline-flex items-center ${
                  albumStyle.podcastBox
                } mdx:min-w-220 `}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Podcasts_%28iOS%29.svg"
                  alt="apple"
                  className="w-8"
                />
                <span className="ml-3">Apple Podcast</span>
              </button>
            </li>
            <li className="flex">
              <button
                className={`py-6 px-6 rounded-lg inline-flex items-center ${
                  albumStyle.podcastBox
                } mdx:min-w-220`}
              >
                <img
                  src="https://www.svgrepo.com/show/135807/soundcloud.svg"
                  alt="apple"
                  className="w-8"
                />
                <span className="ml-3">Apple Podcast</span>
              </button>
            </li>
            <li className="flex">
              <button
                className={`py-6 px-6 rounded-lg inline-flex items-center ${
                  albumStyle.podcastBox
                } mdx:min-w-220`}
              >
                <img
                  src="https://cdn.worldvectorlogo.com/logos/google-podcasts.svg"
                  alt="apple"
                  className="w-8"
                />
                <span className="ml-3">Apple Podcast</span>
              </button>
            </li>
          </ul>
          <ul className="flex justify-center max-w-2xl ml-auto mr-auto">
            <li className="flex mr-3">
              <button
                className={`py-6 px-6 rounded-lg inline-flex items-center ${
                  albumStyle.podcastBox
                }`}
              >
                <img
                  src="https://cdn.worldvectorlogo.com/logos/google-podcasts.svg"
                  alt="apple"
                  className="w-8"
                />
                <span className="ml-3">Apple Podcast</span>
              </button>
            </li>
            <li className="flex ml-3">
              <button
                className={`py-6 px-6 rounded-lg inline-flex items-center ${
                  albumStyle.podcastBox
                }`}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
                  alt="apple"
                  className="w-8"
                />
                <span className="ml-3">Apple Podcast</span>
              </button>
            </li>
          </ul>
        </div>

        <div className="text-center p-8 max-w-md m-auto mt-24">
          <div className="text-gray-800">Reviving Islamic Disclourse</div>
          <div className="mt-3 text-gray-700 leading-relaxed">
            A Muslim Podcast Facilitating Intellectual Discourse & Dialogue with
            Academics, Activists, Shaykhs & Influencers from all around the
            world.
          </div>
        </div>

        <div className="w-full bg-gray-100 text-center pb-8 mt-20">
          <div className="max-w-lg m-auto">
            <div className="pt-8 font-medium text-xl text-gray-900 ">
              Support Us
            </div>
            <div className="font-medium text-gray-700 leading-relaxed pl-8 pr-8 mt-6 md:mt-8">
              Support this podcast on Patreon and get exclusive, premium content
              and bonuses for as little as $1 a month!
            </div>
            <div className="font-medium text-gray-700 leading-relaxed pl-8 pr-8 mt-6">
              This includes ad-free early released episodes, unreleased
              recordings, LIVE Q & A's with Victoria, videos, and other perks{" "}
            </div>
            <div className="flex justify-center md:mt-8">
              <a
                href="https://www.patreon.com/bePatron?u={their user id}"
                data-patreon-widget-type="become-patron-button"
              >
                <img
                  src="https://c5.patreon.com/external/logo/become_a_patron_button.png"
                  alt="pateron button"
                  className="mt-6"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pl-4 pr-4 max-w-2xl m-auto lg:max-w-3xl lg:pl-0 lg:pr-0 lgx:max-w-960 xl:max-w-5xl">
          <div className="font-medium text-2xl mb-8 text-gray-700 md:max-w-2xl md:m-auto md:mb-8 lg:max-w-3xl lg:ml-6 lg:mr-6 lgx:max-w-960 lgx:mx-12 xl:max-w-5xl">
            Episodes
          </div>
          <div
            className={`pl-4 pr-4 pt-8 pb-8 ${
              albumStyle.box
            } mb-8 md:max-w-2xl md:m-auto md:mb-8 lg:max-w-3xl lg:mx-6 lgx:max-w-960 lgx:mx-12`}
          >
            <div className="text-gray-700 text-sm">12th June 2019</div>
            <div className="font-medium text-gray-900 text-lg mt-2">
              Episode 56 - The Natural Prophetic Way | Shaykh Hassan Elsetohy &
              Geoff Lawton
            </div>
            <div className="mt-2">
              Early Islamic history, African nations, Trade & Business and much
              more! We touch on all this with Ustadh Mohammed Abdullah Artan.
              Mohammed Artan...
            </div>
            <div className="text-sm text-gray-700 font-medium mt-2">
              1 hr 34 min
            </div>
          </div>

          {data.allFeedGatsbyBlog.edges.map(({ node }, index) => (
            <Link to={node.id}>
              <div
                className={`pl-4 pr-4 pt-8 pb-8 ${
                  albumStyle.box
                } mb-8 md:max-w-2xl md:m-auto md:mb-8 lg:max-w-3xl lg:mx-6 lgx:max-w-960 lgx:mx-12 xl:max-w-5xl`}
              >
                <div className="text-gray-700 text-sm">12th June 2019</div>
                <div className="font-medium text-gray-900 text-base mt-2">
                  Episode 56 - The Natural Prophetic Way | Shaykh Hassan
                  Elsetohy & Geoff Lawton
                </div>
                <div className="mt-2">
                  Early Islamic history, African nations, Trade & Business and
                  much more! We touch on all this with Ustadh Mohammed Abdullah
                  Artan. Mohammed Artan...
                </div>
                <div className="text-sm text-gray-700 font-medium mt-2">
                  1 hr 34 min
                </div>
              </div>
            </Link>
          ))}

          <div className="flex justify-center mt-16 lgx:max-w-960 lgx:mx-12">
            <button
              onClick={() => setCount(count + 1)}
              className="bg-teal-500 text-white font-bold py-3 px-8 rounded"
            >
              <span>Load More</span>
            </button>
          </div>
          {count}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allFeedGatsbyBlog(limit: 3) {
      totalCount
      edges {
        node {
          title
          pubDate
          id
          itunes {
            duration
            subtitle
          }
        }
      }
    }
  }
`

function formatTime(timeString) {
  var pieces = timeString.split(":")
  var hour, minute, second
  var time

  console.log(pieces)
  if (pieces.length === 3) {
    hour = parseInt(pieces[0], 11)
    minute = parseInt(pieces[1], 10)
    second = parseInt(pieces[2], 10)

    time = `${hour} hr ${minute} min`
  } else {
    minute = parseInt(pieces[0], 10)
    time = `${minute} min `
  }

  return time
}

function formatDate(dateString) {
  return dateString.substring(4, 16)
}

function formatSubTitle(subTitle) {
  return truncate(subTitle, {
    length: 100, // maximum 30 characters
    separator: /,?\.* +/, // separate by spaces, including preceding commas and periods
  })
}

export default IndexPage

/**
 * TODO
 *
 * finished the article page off
 * sort out the load more
 * sort out all the font sizes for the pages all screen sizes
 * sort out the listen section boxes their size and shawods
 * sort out the article cards on bigger screens
 * clean up
 *
 * experiment with diffrent layout sections create a section for the about us
 * or try putting the about us before the listen to us sections
 *
 * on the smaller screens do this aswell
 * could have own section for where t listen with shadow icons
 *
 *
 */
