import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Box, Button, Typography } from "@mui/material"

const IndexPage = () => (
  <Layout showApplyNow={true}>
    <Seo title="Home" />
    <Typography variant="h5" component="div" gutterBottom>
      Hey! learners, we are open for registration.
    </Typography>
    <div>
      <Typography variant="subtitle1" component="div" gutterBottom>
        Book your seats
        <Button size="small" sx={{ m: 1 }} variant="outlined">
          Register now
        </Button>
      </Typography>
      <Box sx={{ my: 2 }}>
        <iframe
          title="cachar driving school map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.892612925842!2d92.77191471500225!3d24.833345784066733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e357f22ce503d%3A0x9798169831ecb073!2sNH37%20%26%20Ramnagar%20Rd%2C%20Ramnagar%2C%20Silchar%2C%20Assam%20788026!5e0!3m2!1sen!2sin!4v1643520058341!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        />
      </Box>
      <a
        style={{
          fontSize: 14,
          color: "grey",
          textDecoration: "none"
        }}
        href="tel:+911234567890"
      >
        {"Contact us : "} +91 1234567890
      </a>
      <p
        style={{
          lineHeight: "16px",
          maxWidth: 200,
          fontSize: 14
        }}
      >
        Ramnagar, National Highway 53, Bajantipur Pt I, Assam 788026
      </p>
    </div>
  </Layout>
)

export default IndexPage
