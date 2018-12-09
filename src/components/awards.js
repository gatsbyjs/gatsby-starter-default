import React from 'react'
import Twigs from './twigs'
import './awards.css'

const Awards = () => (
  <div className="awards">
    <div>
      <Twigs />
      <h3>Website Van Het Jaar</h3>
      <h4>Beste website van het jaar</h4>
      <span>TicketSwap</span>
    </div>
    <div>
      <Twigs />
      <h3>iCulture</h3>
      <h4>Beste Weer-app 2015</h4>
      <span>Buienalarm</span>
    </div>
    <div>
      <Twigs />
      <h3>Business Insider</h3>
      <h4>Best Startup Logos Of The Year</h4>
      <span>Just In Case</span>
    </div>
  </div>
)

export default Awards
