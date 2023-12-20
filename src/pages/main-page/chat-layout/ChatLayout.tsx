import { Container, ListItem, Theme, Typography, createStyles, makeStyles, styled } from '@mui/material';
import React from 'react';



const Bubble = styled(ListItem)(({theme}) => ({
    border: '0.5px solid black',
    borderRadius: '10px',
    margin: '5px',
     padding: '10px',
    display: 'inline-block',
}))

export const ChatLayout = () => {
    
    const dummyData = [
        {
            message: '1: This should be in left',
            direction: 'left'
        },
        {
            message: '2: This should be in right',
            direction: 'right'
        },
        {
            message: '3: This should be in left again',
            direction: 'left'
        }
        ,
        {
            message: '3: This should be in left again',
            direction: 'left'
        }
        ,
        {
            message: '3: This should be in left again',
            direction: 'left'
        }
        ,
        {
            message: '3: This should be in left again',
            direction: 'left'
        }
    ];

    const chatBubbles = dummyData.map((obj, i = 0) => (
        <Container sx={{minWidth:'100px'}} >
            <Bubble key={i++} >
                <Typography >{obj.message}</Typography>
            </Bubble>
        </Container>
    ));
    return (
    <Container maxWidth={false} sx={{ bottom: 0, position: 'fixed', display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'flex-start'}}>{chatBubbles}</Container>);
};
