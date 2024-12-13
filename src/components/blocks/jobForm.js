import React, { useState } from "react"
import {
  Box,
  Container,
  Text,
  Heading,
  Grid,
  Input,
  Button,
  Flex,
  Label,
} from "@theme-ui/components"
import { Textarea, Checkbox } from "theme-ui"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

const JobForm = ({ title, jobPosition, privacyPolicyDescription }) => {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const isBrowser = typeof window !== "undefined"

  const [formData, setFormData] = useState({
    email: "",
    nome: "",
    cognome: "",
    telefono: "",
    messaggio: "",
    job: jobPosition,
    accordoPrivacyCookies: false,
    urlPagina: isBrowser && window.location.href,
  })

  const [selectedFile, setSelectedFile] = useState([])
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)

  const onFileChange = e => {
    var filesArr = Array.prototype.slice.call(e.target.files)
    setSelectedFile([...selectedFile, ...filesArr])
  }

  const removeFile = f => {
    setSelectedFile(selectedFile.filter(x => x !== f))
  }

  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)

    const result = await executeRecaptcha("jobApplication")
    const data = { ...formData, selectedFile: selectedFile }

    if (result) {
      new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(selectedFile[0])
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      }).then(file => {
        fetch("/.netlify/functions/sendApplicationMail", {
          body: JSON.stringify({
            file: file,
            ...data,
          }),
          headers: {
            "content-type": "application/json",
          },
          method: "post",
        })
          .then(response => {
            if (response.status === 404) {
              setLoading(false)
              setSuccess(false)
            } else {
              setSuccess(true)
              setLoading(false)

              if (typeof window !== "undefined" && window.gtag !== undefined) {
                window.gtag("event", "Submit", {
                  event_category: "Form",
                  event_label: "Job Application",
                })
              }
            }
          })
          .catch(error => {
            setLoading(false)
            setSuccess(false)
          })
      })
    } else {
      setLoading(false)
      setSuccess(false)
    }
  }

  return (
    <Container>
      <Box sx={{ maxWidth: "800px", mx: "auto", py: 4 }}>
        <Heading as="h2" mb={4}>
          {title}
        </Heading>

        <Box as="form" onSubmit={handleSubmit}>
          <Grid gap={3}>
            <Box>
              <Input
                name="nome"
                placeholder="Nome *"
                required
                onChange={e =>
                  setFormData({ ...formData, nome: e.target.value })
                }
              />
            </Box>

            <Box>
              <Input
                name="cognome"
                placeholder="Cognome *"
                required
                onChange={e =>
                  setFormData({ ...formData, cognome: e.target.value })
                }
              />
            </Box>

            <Box>
              <Input
                name="email"
                type="email"
                placeholder="Email *"
                required
                onChange={e =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </Box>

            <Box>
              <Input
                name="telefono"
                placeholder="Telefono *"
                required
                onChange={e =>
                  setFormData({ ...formData, telefono: e.target.value })
                }
              />
            </Box>

            <Box>
              <Textarea
                name="messaggio"
                placeholder="Messaggio"
                rows={4}
                onChange={e =>
                  setFormData({ ...formData, messaggio: e.target.value })
                }
              />
            </Box>

            <Box>
              <Input
                type="file"
                onChange={onFileChange}
                accept=".doc,.docx,.pdf,.txt"
                onClick={event => {
                  event.target.value = null
                }}
              />
              {selectedFile.map((file, index) => (
                <Flex key={index} sx={{ mt: 2, alignItems: "center" }}>
                  <Text>{file.name}</Text>
                  <Button
                    variant="text"
                    onClick={() => removeFile(file)}
                    sx={{ ml: 2 }}
                  >
                    X
                  </Button>
                </Flex>
              ))}
            </Box>

            <Box>
              <Label>
                <Checkbox
                  required
                  onChange={e =>
                    setFormData({
                      ...formData,
                      accordoPrivacyCookies: e.target.checked,
                    })
                  }
                />
                <Text sx={{ ml: 2 }}>{privacyPolicyDescription}</Text>
              </Label>
            </Box>

            <Button type="submit" disabled={loading}>
              {loading ? "Invio in corso..." : "Invia candidatura"}
            </Button>

            {success === true && (
              <Text sx={{ color: "success", mt: 3 }}>
                Candidatura inviata con successo!
              </Text>
            )}
            {success === false && (
              <Text sx={{ color: "error", mt: 3 }}>
                Si è verificato un errore. Riprova più tardi.
              </Text>
            )}
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

export default JobForm
