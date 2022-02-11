import * as React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Controller, useForm } from "react-hook-form"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@mui/material"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import DatePicker from "@mui/lab/DatePicker"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import StepContent from "@mui/material/StepContent"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Paper from "@mui/material/Paper"
import { styled } from "@mui/material/styles"
import classNames from "classnames"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import data from "../states"
import Upload from "rc-upload"
import { Delete, UploadFile } from "@mui/icons-material"

const EDUCATION_QALIFICATION = [
  {
    name: "Below 10th",
    value: "below_10"
  },
  {
    name: "High School",
    value: "above_10"
  },
  {
    name: "Under graduate",
    value: "under_graduate"
  },
  {
    name: "Graduated",
    value: "graduated"
  },
  {
    name: "Others",
    value: "others"
  }
]
const STATE = data.states.map(x => ({ name: x.state, value: x.state }))
const DTO_OFFICE = [{ name: "Cachar", value: "Cachar" }]
const COURSES = [
  {
    id: "LMV",
    title: "LMV Driving Course",
    subtitle: "Learn to drive light motor vehicals",
    courseDuration: "45 days",
    features: [
      {
        name: "Simulator",
        duration: "20mins"
      },
      {
        name: "Practical",
        duration: "20mins"
      },
      {
        name: "Theory",
        duration: "20mins"
      }
    ],
    price: "7,500 INR"
  },
  {
    id: "HMV",
    title: "HMV Driving Course",
    subtitle: "Learn to drive heavy motor vehicals",
    courseDuration: "45 days",
    features: [
      {
        name: "Simulator",
        duration: "20mins"
      },
      {
        name: "Practical",
        duration: "20mins"
      },
      {
        name: "Theory",
        duration: "20mins"
      }
    ],
    price: "6,500 INR"
  },
  {
    id: "BIKE",
    title: "Bike Driving Course",
    subtitle: "Learn to drive two wheeler vehicals",
    courseDuration: "45 days",
    features: [
      {
        name: "Simulator",
        duration: "20 mins"
      },
      {
        name: "Practical",
        duration: "20 mins"
      },
      {
        name: "Theory",
        duration: "20 mins"
      }
    ],
    price: "4,500 INR"
  }
]
const steps = [
  {
    id: "course",
    label: "Select Course",
    description: `Please select a course`
  },
  {
    id: "personal",
    label: "Personal Information",
    description: `Enter details about you.`
  },
  {
    id: "documents",
    label: "Upload Documents",
    description: `Upload supporting documents.`
  },
  {
    id: "payment",
    label: "Make Payment",
    description: `Make payment and upload payment proof.`
  }
]

const CourseItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  maxWidth: 400,
  borderWidth: 2,
  "&:hover,&.selected": {
    borderColor: theme.palette.primary.main,
    color: theme.palette.text.primary
  },
  "&.selected": {
    borderColor: theme.palette.secondary.main
  }
}))
const CourseList = ({ list, onSelect, selectedCourse }) => {
  return (
    <Stack direction="row" spacing={2}>
      {list.map(({ title, id, subtitle, features, courseDuration, price }) => (
        <CourseItem
          key={id}
          onClick={() => onSelect(id)}
          variant="outlined"
          className={classNames({ selected: selectedCourse === id })}
        >
          <CardHeader
            title={title}
            subheader={subtitle}
            titleTypographyProps={{
              variant: "button"
            }}
            subheaderTypographyProps={{
              variant: "caption"
            }}
          />
          <CardContent sx={{ py: 0 }}>
            <Typography variant="caption">Fees &nbsp;</Typography>
            <Typography
              sx={{ display: "inline-block", mb: 2, fontWeight: 600 }}
              color="primary"
            >
              {price}
            </Typography>
            <Accordion sx={{ mb: 2 }} disableGutters>
              <AccordionSummary
                sx={{ flexDirection: "row" }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box>
                  <Typography component="div" variant="subtitle2">
                    Duration - {courseDuration}
                  </Typography>
                  <Typography component="div" variant="caption">
                    1 hour session per day
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <List dense disablePadding>
                  {features.map(feature => (
                    <ListItem sx={{ mb: 0, px: 0 }}>
                      <ListItemText
                        secondary={`${feature.name} - ${feature.duration}`}
                      />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
            <Stack direction="row" spacing={1} variant="outlined">
              {features.map(({ name }) => (
                <Chip label={`${name}`} size="small" color="secondary" />
              ))}
            </Stack>
          </CardContent>
        </CourseItem>
      ))}
    </Stack>
  )
}
const stepFields = [
  ["course"],
  [
    "name",
    "dob",
    "education_qualification",
    "email",
    "mobile",
    "father_or_spouse_name",
    "present_address",
    "prmanent_address",
    "state",
    "district",
    "dto_office"
  ],
  ["address_proof", "id_proof"],
  ["payment_receipt"]
]
const checkError = (errors, index) => {
  return stepFields[index].filter(key => Boolean(errors[key])).length > 0
}
const submitForm = console.log
const filetypes = "image/jpeg,image/gif,image/png,application/pdf"
const AddressPage = () => {
  let eighteenYearsAgo = new Date()
  eighteenYearsAgo = eighteenYearsAgo.setFullYear(
    eighteenYearsAgo.getFullYear() - 18
  )
  const [activeStep, setActiveStep] = React.useState(0)
  const {
    trigger,
    watch,
    control,
    setValue,
    getValues,
    formState: { errors }
  } = useForm({
    defaultValues: {
      state: "Assam",
      district: "Cachar",
      dto_office: "Cachar",
      dob: eighteenYearsAgo
    }
  })
  const state = watch("state")
  const course = watch("course")
  const DISTRICT = (
    data.states.find(s => s.state === state)?.districts || []
  ).map(d => ({
    name: d,
    value: d
  }))

  const handleNext = React.useCallback(() => {
    trigger(stepFields[activeStep])
    if (activeStep === steps.length - 1) {
      if (Object.keys(errors).length === 0) submitForm(getValues())
    } else setActiveStep(prevActiveStep => prevActiveStep + 1)
  }, [trigger, errors, setActiveStep, activeStep, getValues])

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }
  const STEPPER = {
    course: (
      <Controller
        name="course"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <CourseList
            list={COURSES}
            onSelect={course => field.onChange(course)}
            selectedCourse={field.value}
          />
        )}
      />
    ),
    personal: (
      <>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField id="name" label="Name" variant="outlined" {...field} />
          )}
        />
        <Controller
          name="dob"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date of birth"
                renderInput={params => <TextField {...params} />}
                maxDate={eighteenYearsAgo}
                {...field}
              />
            </LocalizationProvider>
          )}
        />
        <FormControl fullWidth>
          <InputLabel id="education_qualification_label">
            Education Qualification
          </InputLabel>
          <Controller
            name="education_qualification"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                labelId="education_qualification_label"
                id="education_qualification"
                label="Education qualification"
                {...field}
              >
                {EDUCATION_QALIFICATION.map(({ value, name }) => (
                  <MenuItem value={value}>{name}</MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField id="email" label="Email" variant="outlined" {...field} />
          )}
        />
        <Controller
          name="mobile"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              id="mobile"
              label="Mobile"
              variant="outlined"
              {...field}
            />
          )}
        />
        <Controller
          name="father_or_spouse_name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              id="father_or_spouse_name"
              label="Father's name / Spouse name"
              variant="outlined"
              {...field}
            />
          )}
        />
        <Controller
          name="present_address"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              id="present_address_id"
              label="Present Address"
              multiline
              rows={4}
              variant="filled"
              {...field}
            />
          )}
        />
        <Controller
          name="permanent_address"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              id="permanent_address_id"
              label="Permanent Address"
              multiline
              rows={4}
              variant="filled"
              {...field}
            />
          )}
        />
        <FormControl fullWidth>
          <InputLabel id="state_label">State</InputLabel>
          <Controller
            name="state"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select labelId="state_label" id="state" label="State" {...field}>
                {STATE.map(({ value, name }) => (
                  <MenuItem value={value}>{name}</MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="">District</InputLabel>
          <Controller
            name="district"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                labelId="district_label"
                id="district"
                label="District"
                {...field}
              >
                {DISTRICT.map(({ value, name }) => (
                  <MenuItem value={value}>{name}</MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="dto_office_label">DTO Office</InputLabel>
          <Controller
            name="dto_office"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                disabled
                labelId="dto_office_label"
                id="dto_office"
                label="DTO Office"
                {...field}
              >
                {DTO_OFFICE.map(({ value, name }) => (
                  <MenuItem value={value}>{name}</MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
      </>
    ),
    documents: (
      <Box>
        <Box m={1}>
          <Controller
            name="id_proof"
            control={control}
            rules={{ required: true }}
            render={({ field }) =>
              field.value ? (
                <Card>
                  <CardHeader
                    sx={{ py: 0 }}
                    title="ID proof"
                    titleTypographyProps={{ variant: "overline" }}
                  />
                  <CardContent sx={{ py: 1 }}>
                    <Typography variant="caption">
                      {field.value.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      startIcon={<Delete />}
                      type="text"
                      size="small"
                      fullWidth
                      color="error"
                      onClick={() => {
                        setValue("id_proof", undefined, {
                          shouldValidate: true
                        })
                      }}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              ) : (
                <Upload type="drag" onStart={field.onChange} accept={filetypes}>
                  <Button
                    startIcon={<UploadFile />}
                    variant="contained"
                    component="span"
                  >
                    ID Proof
                  </Button>
                </Upload>
              )
            }
          />
        </Box>
        <Box m={1}>
          <Controller
            name="address_proof"
            control={control}
            rules={{ required: true }}
            render={({ field }) =>
              field.value ? (
                <Card>
                  <CardHeader
                    sx={{ py: 0 }}
                    title="ID proof"
                    titleTypographyProps={{ variant: "overline" }}
                  />
                  <CardContent sx={{ py: 1 }}>
                    <Typography variant="caption">
                      {field.value.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      startIcon={<Delete />}
                      type="text"
                      size="small"
                      fullWidth
                      color="error"
                      onClick={() => {
                        setValue("address_proof", undefined, {
                          shouldValidate: true
                        })
                      }}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              ) : (
                <Upload type="drag" onStart={field.onChange} accept={filetypes}>
                  <Button
                    startIcon={<UploadFile />}
                    variant="contained"
                    component="span"
                  >
                    Address Proof
                  </Button>
                </Upload>
              )
            }
          />
        </Box>
      </Box>
    ),
    payment: (
      <Box>
        <CourseList
          list={COURSES.filter(x => x.id === course)}
          selectedCourse={course}
        />
      </Box>
    )
  }

  return (
    <Layout>
      <Seo title="Admission Form" />
      <Typography variant="h5">Admission form</Typography>
      <Typography variant="caption">
        Fill up the following details to book your slot
      </Typography>
      <Box></Box>
      <Box sx={{ mt: 2 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel error={checkError(errors, index)}>
                {step.label}
                <Typography
                  component="div"
                  variant="caption"
                  sx={{ color: "text.secondary" }}
                >
                  {step.description}
                </Typography>
              </StepLabel>
              <StepContent>
                <Box
                  component="form"
                  sx={{
                    my: 2,
                    "& > :not(style)": {
                      my: 2,
                      width: "50ch",
                      display: "flex"
                    }
                  }}
                  noValidate
                  autoComplete="off"
                >
                  {STEPPER[step.id]}
                  <div>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      size="small"
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Layout>
  )
}

export default AddressPage
