import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Contact = () => {

  return(
    <div>
        <Grid container spacing={2}>
            <Grid item xs={22}>
                <Item>
                    <h2>Contact Support</h2>
                </Item>
            </Grid>
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
                    <Stack direction="row" justifyContent="center" spacing={2}>
                        <Button variant="contained" color="success" href="#contained-buttons">
                            Submit
                        </Button>
                        <Button variant="contained" color="success" href="#contained-buttons">
                            Cancel
                        </Button>
                    </Stack>
                </Stack>
            </Box>
      </Grid>
    </div>
  )
}

export default Contact