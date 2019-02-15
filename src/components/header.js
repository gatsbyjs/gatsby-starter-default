import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#1b75b7',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        marginLeft: '1.45rem',        
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <div
          style={{
            color: 'white',
          }}
        >
          {siteTitle}
        </div>
      </h1>
    </div>
  </div>
)

export default Header
