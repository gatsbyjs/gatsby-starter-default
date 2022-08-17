import * as React from "react"

//Components
import Layout from "../../components/layout"
import Seo from "../../components/seo"


//MUI
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import { DownloadRounded } from "@mui/icons-material";
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import { QrCodeScanner } from "@mui/icons-material";
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

//import the events JSON
var events = require('../events.json').events;

   const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  });

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

function SelectedEvent(props) {
  const eventId = props.params.id
  // I couldn't get the lookup to work, for this line below to work the events need to stay in the correct order where their id=index
  var specificEvent = events[eventId];

    return (

        <Layout>
          <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
        Selected Event - Details
        </Typography>
        <Typography variant="h5" component="div">
          {specificEvent.Title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Presenter: {specificEvent.Presenter}
        </Typography>
        <Typography variant="body2">
          Category: {specificEvent.Category}
          <br />
          Date: {specificEvent.Date}
          <br />
          Time: {specificEvent.Time}
          <br />
          Location: {specificEvent.Location}
          <br />

        </Typography>
      </CardContent>
      <CardActions>
      <Stack spacing={2} direction="row"
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
      </CardActions>
    </Card>
          
           
        </Layout>
    );
}

export const Head = () => <Seo title="Selected Event" />

export default SelectedEvent
