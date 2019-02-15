import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './header'
import './layout.css'

const Layout =  ({ children }) => (
    <div>
       <Helmet
          title='Astra University Events'
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
      >
        <html lang="en" />
      </Helmet>
      <Header siteTitle='Astra Universty Events' />
         <div
          style={{
            margin: '0 auto',
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
    </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;