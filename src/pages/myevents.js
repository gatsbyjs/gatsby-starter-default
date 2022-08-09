import React from 'react';
import Layout from "../components/layout"

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { ListItemButton } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const MyEvents = () => {
    // This array is a placeholder for when we're able to access the Microsoft Graph API/have some backend that keeps tracks of events a user is registered to
    const events = [
        {
            name: "Defense in the Digital Age",
            description: "sdlghvwewpgwepfvnepwvn",
            date: "09-12-2022",
            time: "9:00-10:15",
            status: "Open",
            presenter: "LCol SoandSo",
            route: "/selectedEvent"
        },
        {
            name: "Event 2",
            description: "sdlghvwewpgwepfvnepwvn",
            date: "09-15-2022",
            time: "11:00-12:30",
            status: "Open",
            presenter: "LCol BlahBlah",
            route: "/"
        },
      ]

  return(
    <Layout>
    <div>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12}>
                <Item>
                    <h2>My Events</h2>
                </Item>
            </Grid>
            <Grid item xs={10}>
            <List dense={true}>
            {/* This function maps all elements of the array into List Items */}
            {events.map(event => {
          return (
            <ListItem>
            <ListItemButton href={event.route}>
            <Grid item xs={10}>
              <ListItemText>{event.name}</ListItemText>
              </Grid>
              <Grid item xs={10}>
              <ListItemText secondary={event.date} />
              </Grid>
            </ListItemButton>
            </ListItem>
          );
            })}
            </List>
            </Grid>
      </Grid>
    </div>
    </Layout>
  )
}

export default MyEvents