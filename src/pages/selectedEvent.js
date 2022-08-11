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
import { DownloadRounded } from "@mui/icons-material";
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


import Grid from "@mui/material/Grid";


import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import HomeIcon from '@mui/icons-material/Home';
import { MdOutlineHelp} from "react-icons/md";
import { QrCodeScanner } from "@mui/icons-material";
import AddTaskIcon from '@mui/icons-material/AddTask';
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded';



const SelectedEventText = [
    {
      id: 1,
      primary: 'Defense in the Digital Age and Whatnot',
//       secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
//       person: '/static/images/avatar/5.jpg',
     }
   ];

   const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  });


function SelectedEvent() {
  const [successOpen, setSuccessOpen] = React.useState(false);
  const [errorOpen, setErrorOpen] = React.useState(false);

  const Register = event => {
    //need to add logic to actually register the user for the event in question
    
    //if success
    setSuccessOpen(true);
    //if error
    // setErrorOpen(true);
  };

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
                    <DownloadRounded />
                </Avatar>
            </Stack>
             </Stack>

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
                Registration Successful!
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
                There was an error in processing your registration.
                </Alert>
              </Collapse>
            </Box>


          <h5>Selected Event - Details and Registration</h5>
              <h1>
                Defense in the Digital Age
            </h1>

            <Button variant="contained"
                onClick = {Register}
                sx={{ bgcolor: green[500] }}
                endIcon={< AddTaskIcon />}>
                Register Now
              </Button>

            <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
            <p> Status: Open
                <p> {""}</p>

                <b> September 12, 0900 - 1015 </b>

            </p>
      </Container>
    </React.Fragment>

            <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: '50px' }}>
        <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
          Defense in the Digital Age
        </Typography>
        <List sx={{ mb: 2 }}>
          {SelectedEventText.map(({ id }) => (
            <React.Fragment key={id}>
              {id === 1 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Modern war is not fought on the battleground, but online.

                  <p>{" "}</p>

                  Lorem ipsum and lots of other good information and whatnot.
                </ListSubheader>

              )}
            </React.Fragment>

          ))}
        </List>
      </Paper>

{/* bottom toolbar */}
      <AppBar position="fixed" color="success" sx={{ top: 'auto', bottom: 0 }}>
         <Toolbar>

         <IconButton color="inherit" href="/faq" >
               < MdOutlineHelp />
          </IconButton>

          <IconButton color="inherit" href="/check-in-now" >
               < QrCodeScanner />
          </IconButton>


          <StyledFab color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 9 }} />



          <IconButton color="inherit">
            <SearchIcon />


          </IconButton>
          <IconButton color="inherit">
            <MoreIcon />
          </IconButton>


        </Toolbar>
      </AppBar>
    </React.Fragment>


            <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
             <p>


            </p>




      </Container>
    </React.Fragment>


    <p> {""}</p>

            <Stack spacing={4} direction="row"
            alignItems="center"
            justifyContent="space-evenly"
            >


                <Button variant="contained"
                href="/check-in-now"
                sx={{ bgcolor: green[500] }}
                endIcon={< QrCodeScanner />}>
                Check in
              </Button>

              <Button variant="contained"
                sx={{ bgcolor: green[500] }}
                href="/lookup-materials"
                endIcon={< DownloadRounded />}>
                Lookup Materials
              </Button>

              <Button variant="contained"
                href="https://www.zoom.us/"
                sx={{ bgcolor: green[500] }}
                endIcon={< VideoLibraryRoundedIcon />}>
                Zoom Link
              </Button>

            </Stack>

            <p> {""}
            </p>

            <p> {""}
            </p>


            <p> {""}
            </p>

            <IconButton  >
            <Link to="/">
               < HomeIcon sx={{ color: deepPurple[500], fontSize: 40 }} />
             </Link>
          </IconButton>
        </Layout>
    );
}

export const Head = () => <Seo title="Selected Event" />

export default SelectedEvent
