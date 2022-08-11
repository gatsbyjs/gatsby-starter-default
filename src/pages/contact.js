import React from 'react';
import Layout from "../components/layout"

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Contact = () => {
    const [successOpen, setSuccessOpen] = React.useState(false);
    const [errorOpen, setErrorOpen] = React.useState(false);

    const Submit = event => {
      //need to add logic to actually submit the question
      
      //if success
      setSuccessOpen(true);
      //if error
      // setErrorOpen(true);
    };

  return(
    <Layout>
    <div>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12}>
                <Item>
                    <h2>Contact Support</h2>
                </Item>
            </Grid>

{/* Success alert */}
            <Box sx={{ width: '100%' }}>
              <Collapse in={successOpen}>
                <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setSuccessOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                Your question has been submitted!
                </Alert>
              </Collapse>
            </Box>
{/* Error Alert */}
            <Box sx={{ width: '100%' }}>
              <Collapse in={errorOpen}>
                <Alert severity = "error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setErrorOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                There was an error submitting your question! Please call (number) or email (email) directly.
                </Alert>
              </Collapse>
            </Box>

            <Grid item xs={10}>
            <Box m="auto">
                <Stack justifyContent="center" spacing={2}>              
                    <TextField fullWidth id="outlined-basic" label="Subject" variant="outlined" margin="normal"/>
                    <TextField
                    fullWidth
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={10}
                    placeholder="What do you need help with?"
                    margin="normal"
                    />
                    <Stack direction="row" justifyContent="center" spacing={3} pt={4}>
                        <Button variant="contained" color="success" onClick={Submit} >
                            Submit
                        </Button>
                        <Button variant="contained" color="success" href="/faq">
                            Cancel
                        </Button>
                    </Stack>  
                </Stack>
            </Box>
            </Grid>
      </Grid>
    </div>
    </Layout>
  )
}

export default Contact