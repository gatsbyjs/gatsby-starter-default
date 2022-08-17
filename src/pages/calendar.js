import * as React from "react"

import Layout from "../components/layout"
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



const dates = {
    title: "2022 Army Week Agenda",
    rows: [
        {
            Day: "Prep",
            Date: `Mon Sept 12`,
        },
        {
            Day: "Day 1",
            Date: `Tue Sept 13`,
        },
        {
            Day: "Day 2",
            Date: `Wed Sept 14`,
        },
        {
            Day: "Day 3",
            Date: `Thur Sept 15`,
        },
        {
            Day: "Day 4",
            Date: `Fri Sept 16`,
        },
        {
            Day: "Post",
            Date: `Sun Sept 18`,
        },        
    ],
};



const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function CalendarView() {
    return (
        <Layout>
        <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
    </Layout>
    );
  }