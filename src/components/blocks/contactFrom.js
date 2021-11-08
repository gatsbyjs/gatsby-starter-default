import React, { useState } from "react"
import {
  Box,
  Text,
  Flex,
  Heading,
  Grid,
  Input,
  Textarea,
  Checkbox,
  Label,
  Link,
  Button,
} from "@theme-ui/components"

import "leaflet/dist/leaflet.css"
import { i18nContext } from "../../context/i18nContext"
import axios from "axios"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

const ContactForm = ({
  title,
  subtitle,
  privacyPolicyDescription,
  newsletterDescription,
}) => {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [token, setToken] = useState("")

  const isBrowser = typeof window !== "undefined"

  const [formData, setFormData] = useState({
    nomeCognome: "",
    azienda: "",
    indirizzo: "",
    citta: "",
    provincia: "",
    cap: "",
    telefono: "",
    email: "",
    messaggio: "",
    urlPagina: isBrowser && window.location.href,
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const sendMail = async event => {
    event.preventDefault()

    const result = await executeRecaptcha("dynamicAction")

    setLoading(true)

    const data = formData

    if (result)
      axios
        .post("/.netlify/functions/sendMail", data)
        .then(function (response) {
          setSuccess(true)
          setLoading(false)

          if (typeof window !== "undefined" && window.gtag !== undefined) {
            window.gtag("event", "Submit", {
              event_category: "Form",
              event_label: "Contact",
            })
          }
          
        })
        .catch(function (error) {
          setLoading(false)
        })
    else setLoading(false)
  }

  return (
    <i18nContext.Consumer>
      {t => (
        <>
          <form onSubmit={sendMail}>
            <Box>
              <Heading sx={{ pb: !subtitle && 3 }}>{title}</Heading>
              {subtitle && (
                <Box sx={{ pb: [5, 5, 5, 6] }}>
                  <Text dangerouslySetInnerHTML={{ __html: subtitle }} />
                </Box>
              )}
              <Grid
                sx={{
                  flexWrap: "wrap",
                  flexDirection: "column",
                  pb: [6, 6, 0, 0],
                }}
                gap={[0, 0, 0, 0]}
              >
                <Box
                  sx={{
                    pb: [4, 4, 4, 4],
                    width: ["100%", "100%"],
                  }}
                >
                  <Input
                    onChange={e =>
                      setFormData(prevState => ({
                        ...prevState,
                        nomeCognome: e.target.value,
                      }))
                    }
                    name={t.formInputTexts.fullName}
                    placeholder={t.formInputTexts.fullName}
                    variant="inputs.primary"
                    required
                  />
                </Box>
                <Box
                  sx={{
                    pb: [4, 4, 4, 4],
                    width: ["100%", "100%"],
                  }}
                >
                  <Input
                    onChange={e =>
                      setFormData(prevState => ({
                        ...prevState,
                        azienda: e.target.value,
                      }))
                    }
                    name={t.formInputTexts.company}
                    placeholder={t.formInputTexts.company}
                    variant="inputs.primary"
                    required
                  />
                </Box>
                <Grid columns={[1, 2]}>
                  <Box
                    sx={{
                      pb: [4, 4, 4, 4],
                      width: ["100%", "100%"],
                    }}
                  >
                    <Input
                      onChange={e =>
                        setFormData(prevState => ({
                          ...prevState,
                          indirizzo: e.target.value,
                        }))
                      }
                      name={t.formInputTexts.address}
                      placeholder={t.formInputTexts.address}
                      variant="inputs.primary"
                      required
                    />
                  </Box>
                  <Box
                    sx={{
                      pb: [4, 4, 4, 4],
                      width: ["100%", "100%"],
                    }}
                  >
                    <Input
                      onChange={e =>
                        setFormData(prevState => ({
                          ...prevState,
                          citta: e.target.value,
                        }))
                      }
                      name={t.formInputTexts.city}
                      placeholder={t.formInputTexts.city}
                      variant="inputs.primary"
                      required
                    />
                  </Box>
                </Grid>

                <Grid columns={[1, "1fr .3fr"]}>
                  <Box
                    sx={{
                      pb: [4, 4, 4, 4],
                      width: ["100%", "100%"],
                    }}
                  >
                    <Input
                      onChange={e =>
                        setFormData(prevState => ({
                          ...prevState,
                          provincia: e.target.value,
                        }))
                      }
                      name={t.formInputTexts.province}
                      placeholder={t.formInputTexts.province}
                      variant="inputs.primary"
                      required
                    />
                  </Box>
                  <Box
                    sx={{
                      pb: [4, 4, 4, 4],
                      width: ["100%", "100%"],
                    }}
                  >
                    <Input
                      onChange={e =>
                        setFormData(prevState => ({
                          ...prevState,
                          cap: e.target.value,
                        }))
                      }
                      name={t.formInputTexts.zipCode}
                      placeholder={t.formInputTexts.zipCode}
                      type="text"
                      inputmode="numeric"
                      pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$"
                      variant="inputs.primary"
                      required
                    />
                  </Box>
                </Grid>

                <Grid columns={[1, 2]}>
                  <Box
                    sx={{
                      pb: [4, 4, 4, 4],
                      width: ["100%", "100%"],
                    }}
                  >
                    <Input
                      onChange={e =>
                        setFormData(prevState => ({
                          ...prevState,
                          telefono: e.target.value,
                        }))
                      }
                      name={t.formInputTexts.phone}
                      placeholder={t.formInputTexts.phone}
                      inputmode="tel"
                      variant="inputs.primary"
                      required
                    />
                  </Box>
                  <Box
                    sx={{
                      pb: [4, 4, 4, 4],
                      width: ["100%", "100%"],
                    }}
                  >
                    <Input
                      onChange={e =>
                        setFormData(prevState => ({
                          ...prevState,
                          email: e.target.value,
                        }))
                      }
                      name="email"
                      type="email"
                      placeholder="Email"
                      variant="inputs.primary"
                      required
                    />
                  </Box>
                </Grid>

                <Textarea
                  sx={{
                    fontFamily: "body",
                    fontSize: [2],
                  }}
                  onChange={e =>
                    setFormData(prevState => ({
                      ...prevState,
                      messaggio: e.target.value,
                    }))
                  }
                  name={t.formInputTexts.message}
                  placeholder={t.formInputTexts.message}
                  variant="inputs.primary"
                  type="textarea"
                />
                <Box sx={{ py: 2 }}>
                  <LabeledCheckbox required={true}>
                    <Box
                      sx={{ p: { mt: 2, mb: 0, fontSize: [0] } }}
                      dangerouslySetInnerHTML={{
                        __html: privacyPolicyDescription,
                      }}
                    />
                  </LabeledCheckbox>
                  <LabeledCheckbox>
                    <Box
                      sx={{ p: { mt: 0, mb: 0, fontSize: [0] } }}
                      dangerouslySetInnerHTML={{
                        __html: newsletterDescription,
                      }}
                    />
                  </LabeledCheckbox>
                </Box>

                {!success ? (
                  <Button
                    type="submit"
                    sx={{ mt: [3, 3, 3, 3] }}
                    variant="buttons.full"
                  >
                    <i18nContext.Consumer>
                      {t => <>{loading ? t.loading : t.sendRequestForm}</>}
                    </i18nContext.Consumer>
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    sx={{ mt: [3, 3, 3, 3] }}
                    variant="buttons.full"
                    disabled
                  >
                    {t.requestSent}
                  </Button>
                )}
              </Grid>
            </Box>
          </form>
        </>
      )}
    </i18nContext.Consumer>
  )
}

const LabeledCheckbox = ({ children, defaultChecked, ...props }) => {
  const [checked, setChecked] = useState(defaultChecked)
  return (
    <Label
      sx={{
        display: "flex",
        alignItems: "center",
        color: "text",
        svg: {
          color: "primary",
        },
        mt: [3, 3, 3, 3],
      }}
    >
      <Checkbox
        checked={checked}
        onChange={() => setChecked(!checked)}
        {...props}
      />
      {children}
    </Label>
  )
}

export default ContactForm
