import React from "react"
import albumStyle from "../components/album.module.css"

import stitcher from "../images/stitcher.png"
import overcast from "../images/overcast.png"
import pocket from "../images/pocketcasts.png"
import Apple from "../images/apple.png"

const WhereToListenSmall = () => (
  <>
    <ul className="flex justify-around max-w-2xl ml-auto mr-auto mdx:max-w-3xl mt-12">
      <li className="flex">
        <a
          href="https://podcasts.apple.com/us/podcast/ask-your-dog-guru/id1294114543?mt=2&app=podcast"
          className={`py-6 px-6 rounded-lg inline-flex items-center no-underline ${
            albumStyle.podcastBox
          } mdx:min-w-220 mdx:justify-center`}
        >
          <img src={Apple} alt="apple" className="w-8" />
          <span className="ml-3">Apple Podcast</span>
        </a>
      </li>
      <li className="flex">
        <a
          href="https://pca.st/private/a5969370-027f-0138-9f4b-0acc26574db2"
          className={`no-underline py-6 px-6 rounded-lg inline-flex items-center ${
            albumStyle.podcastBox
          } mdx:min-w-220 mdx:justify-center`}
        >
          <img src={pocket} alt="apple" className="w-8" />
          <span className="ml-3">Pocketcast</span>
        </a>
      </li>
      <li className="flex">
        <a
          href="https://podcasts.google.com/?feed=aHR0cHM6Ly9kb2dndXJ1LnBvZGJlYW4uY29tL2ZlZWQueG1s&ved=0CAAQ4aUDahcKEwjY66z30rXnAhUAAAAAHQAAAAAQAQ&hl=en-GB"
          className={`no-underline py-6 px-6 rounded-lg inline-flex items-center ${
            albumStyle.podcastBox
          } mdx:min-w-220 mdx:justify-center`}
        >
          {/* <img
            src="https://cdn.worldvectorlogo.com/logos/google-podcasts.svg"
            alt="apple"
            className="w-8 "
          /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-8 h-8"
          >
            <g fill="none">
              <path
                d="M64 238.545v34.91c0 17.673-14.327 32-32 32s-32-14.327-32-32v-34.91c0-17.673 14.327-32 32-32s32 14.327 32 32z"
                fill="#0066d9"
              />
              <path
                d="M448.013 239.455a32.6 32.6 0 0 1-.013-.91c0-17.673 14.327-32 32-32s32 14.327 32 32c0 .304-.004.608-.013.91H512v34.909h-.013c-.48 17.252-14.618 31.09-31.987 31.09s-31.506-13.838-31.987-31.09H448v-34.91h.013z"
                fill="#4285f4"
              />
              <path
                d="M174.545 343.273v34.909c0 17.673-14.326 32-32 32s-32-14.327-32-32v-34.91c0-17.672 14.327-32 32-32s32 14.328 32 32zM174.545 133.818V248h-.008c-.386 17.337-14.562 31.273-31.992 31.273S110.94 265.337 110.554 248h-.009V133.818c0-17.673 14.327-32 32-32s32 14.327 32 32z"
                fill="#ea4335"
              />
              <path
                d="M337.455 168.727c0 17.673 14.326 32 32 32s32-14.327 32-32v-34.909c0-17.673-14.327-32-32-32s-32 14.327-32 32z"
                fill="#34a853"
              />
              <path
                d="M224 66.91c0 17.672 14.327 32 32 32s32-14.328 32-32V32c0-17.673-14.327-32-32-32s-32 14.327-32 32zM224 445.09c0-17.672 14.327-32 32-32s32 14.328 32 32V480c0 17.673-14.327 32-32 32s-32-14.327-32-32z"
                fill="#fab908"
              />
              <path
                d="M337.455 264.727c0-17.673 14.326-32 32-32s32 14.327 32 32v113.455c0 17.673-14.327 32-32 32s-32-14.327-32-32z"
                fill="#34a853"
              />
              <path
                d="M288 162.91v186.18c0 17.674-14.327 32-32 32s-32-14.326-32-32V162.91c0-17.674 14.327-32 32-32s32 14.326 32 32z"
                fill="#fab908"
              />
            </g>
          </svg>
          <span className="ml-3">Google Podcast</span>
        </a>
      </li>
    </ul>
    <ul className="flex justify-center max-w-2xl ml-auto mr-auto mt-6">
      <li className="flex mr-3">
        <a
          href="https://overcast.fm/itunes1294114543/ask-your-dog-guru"
          className={`no-underline py-6 px-6 rounded-lg inline-flex items-center ${
            albumStyle.podcastBox
          } mdx:justify-center mdx:min-w-220`}
        >
          <img src={overcast} alt="Overcast" className="w-8" />
          <span className="ml-3">Overcast App</span>
        </a>
      </li>
      <li className="flex ml-3">
        <a
          href="https://open.spotify.com/show/1ib4MkfMSvLYgD5FNT9Snd"
          className={`no-underline py-6 px-6 rounded-lg inline-flex items-center ${
            albumStyle.podcastBox
          } mdx:justify-center mdx:min-w-220`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 168 168"
            className="w-8 h-8"
          >
            <path
              fill="#1ED760"
              d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
            />
          </svg>
          <span className="ml-3">Spotify Podcast </span>
        </a>
      </li>
    </ul>
  </>
)

export default WhereToListenSmall
