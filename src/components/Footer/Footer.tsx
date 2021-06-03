import * as React from "react"

export const Footer = () => (
    <footer
        style={{
            marginTop: `2rem`,
        }}
        >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
)
