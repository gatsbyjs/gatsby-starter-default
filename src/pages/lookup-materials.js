import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

//import { Text, View } from 'react-native';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
//import { styled } from '@mui/material/styles';
import { deepPurple, green } from '@mui/material/colors';
import FolderIcon from '@mui/icons-material/Folder';
import { DownloadRounded, DownloadDoneOutlined, DownloadingOutlined} from "@mui/icons-material";
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';

//import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";


// bottom bar

import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
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


const LookupMaterialsText = [
    {
      id: 1,
      primary: 'Defense in the Digital Age and Whatnot',
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





function LookupMaterials() {
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



          <h5>Lookup Materials</h5>
              {/* <h4>
                Defense in the Digital Age
               </h4> */}
               <p>
               {""}
                </p>



               <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: '50px' }}>
        <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
          Defense in the Digital Age
        </Typography>
        <List sx={{ mb: 2 }}>
          {LookupMaterialsText.map(({ id }) => (
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
            <IconButton color="inherit" >
               < HomeIcon />
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
                <Button variant="contained" color="success" sx={{ bgcolor: green[500] }}
                href="#contained-buttons">
                <Link to="/lookup-materials"> Lookup Materials </Link>

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





            <IconButton  >
            <Link to="/">
               < HomeIcon sx={{ color: deepPurple[500], fontSize: 40 }} />
             </Link>
          </IconButton>
        </Layout>
    );

}




export const Head = () => <Seo title="Selected Event" />

export default LookupMaterials
