import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

//import { Text, View } from 'react-native';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import { deepOrange, deepPurple, lightGreen } from '@mui/material/colors';
import { green, pink } from '@mui/material/colors';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


import Grid from "@mui/material/Grid";



function SelectedEvent() {
    return (
        <Layout>

    <Grid container justify="flex-end">

<Stack direction="row" spacing={2} alignItems="flex-end">
      <Avatar sx={{ bgcolor: deepPurple[500] }}
        > JB
         </Avatar>
          <Stack
            direction="row"
            spacing={3}
            alignItems="flex-end"
            justifyContent="space-evenly" >
                <Avatar sx={{ bgcolor: green[400] }}>
                    <FolderIcon />
                </Avatar>

                <Avatar sx={{ bgcolor: green[400] }}>
                    <PageviewIcon />
                </Avatar>

                <Avatar sx={{ bgcolor: green[400] }}>
                    <AssignmentIcon />
                </Avatar>
            </Stack>
             </Stack>

    </Grid>



          <h5>Selected Event</h5>
              <h1>
                Defense in the Digital Age
               </h1>
            <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
         <h3> Presenter: LCol SoandSo
        </h3>


            <p> Status: Open
                <p> {""}</p>

                <b> September 12, 0900 - 1015 </b>
                <p> {""}
                    Lorem ipsum and etc, all that good info.</p>
            </p>
            <Box sx={{ bgcolor: '#cfd4c7', height: '20vh' }}
        />
      </Container>
    </React.Fragment>

    <p> {""}</p>

            <Stack spacing={4} direction="row"
            alignItems="center"
            justifyContent="space-evenly"
            >
                <Button variant="contained" color="success" sx={{ bgcolor: green[500] }}
                href="#contained-buttons">
                <Link to="/Materials"> Lookup Materials </Link>

                </Button>

                <Button variant="contained" href="#contained-buttons" color="success"
                >Check-In
                </Button>
                <Button variant="contained" href="#contained-buttons" color="success"
                >Zoom Link
                </Button>
            </Stack>

            <p> {""}
            </p>

            <p> {""}
            </p>


            <p> {""}
            </p>

            <Link to="/">Home</Link>
        </Layout>
    );
}

export const Head = () => <Seo title="Selected Event" />

export default SelectedEvent
