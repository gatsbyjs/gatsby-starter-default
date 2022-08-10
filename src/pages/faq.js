import * as React from "react"

import Layout from "../components/layout"

// import Footer from '../components/Footer/footer'

//import { Text, View } from 'react-native';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
// import { deepOrange, deepPurple } from '@mui/material/colors';
// import { green, pink } from '@mui/material/colors';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Faq from "react-faq-component";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  //This is placeholder data and will need to be filled with actual Questions/Answers
const data = {
    title: "FAQ",
    rows: [
        {
            title: "How do I register for an event?",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            title: "Where can I see an event's location?",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "How can I contact the event organizer",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "Are COVID Protocols in place?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. ` ,
        },
        {
            title: "Do events have limited capacity?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. ` ,
        },
        {
            title: "How do I 'Check in' to an event?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. ` ,
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: 'green',
    // titleTextSize: '48px',
    rowTitleColor: 'black',
    // rowTitleTextSize: 'medium',
    // rowContentColor: 'grey',
    rowContentTextSize: '16px',
    // rowContentPaddingTop: '10px',
    //rowContentPaddingBottom: '10px',
    //rowContentPaddingLeft: '150px',
    //rowContentPaddingRight: '150px',
    // arrowColor: "red",
    //transitionDuration: "1s",
    // timingFunc: "ease"
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

function Help() {

    return (
        <Layout>
        <div>
            <Grid container spacing={2}>
                <Grid item xs={22}>
                    <Item>
                        <h2>Help</h2>
                    </Item>

                </Grid>
                <Grid item xs={12}>
                    <Box m={5}>
                        <Faq
                            data={data}
                            styles={styles}
                            config={config}
                        />
                    </Box>
                </Grid>
                <Box m="auto">
                <h5>Still have questions?</h5>
                    <Button variant="contained" color="success" href="/contact">
                    Contact Us
                    </Button>
                </Box>
            </Grid>
        </div>
        </Layout>
    );
}

export default Help