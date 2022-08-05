import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Footer from './components/Footer/footer'

//import { Text, View } from 'react-native';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { green, pink } from '@mui/material/colors';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Badge from '@mui/material/Badge';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));



function SelectedEvent() {
    return (

        <Layout>

<Stack direction="row" spacing={2} alignItems="flex-end">
                <Avatar sx={{ bgcolor: deepOrange[500] }}
                > JB
                </Avatar>

             </Stack>

             {/* <Stack direction="row"
            spacing={2}
            alignItems="flex-end">

            </Stack> */}

      <Grid container spacing={2}>
        <Grid item xs={22} md={25}>
          <Item>
          <h2>Selected Event</h2>
          </Item>

        </Grid>

        {/* <Grid item xs={8} md={4}>
          <Item>xs=8 md=4</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
    </Grid> */}
      </Grid>

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
            <Box sx={{ bgcolor: '#cfe8fc', height: '20vh' }}
        />
      </Container>
    </React.Fragment>

    <p> {""}</p>

            <Stack spacing={4} direction="row"
            alignItems="center"
            justifyContent="space-evenly"
            >
                <Button variant="contained" color="success" href="#contained-buttons">
                    PDF
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

            <Stack
            direction="row"
            spacing={3}
            alignItems="flex-end"
            justifyContent="space-evenly" >
                <Avatar>
                    <FolderIcon />
                </Avatar>
                <Avatar sx={{ bgcolor: pink[500] }}>
                    <PageviewIcon />
                </Avatar>
                <Avatar sx={{ bgcolor: green[500] }}>
                    <AssignmentIcon />
                </Avatar>
            </Stack>

            <Link to="/">Home</Link>
        </Layout>
    );
}

export const Head = () => <Seo title="Selected Event" />

export default SelectedEvent
