import { Avatar, Box, Container, ListItem, Theme, Typography, createStyles, makeStyles, styled } from '@mui/material';
import classes from './ChatLayout.module.scss'


const Bubble = styled(ListItem)(({theme}) => ({
    backgroundColor:'white',
    borderRadius: '41.59px',
    width:'auto',
    maxWidth:'70%',
    height:'auto',
    margin: '5px',
     padding: '10px',
    display: 'inline-block',
    alignItems:"flex-start",
    overflowWrap: 'break-word'
}))

export const ChatLayout = () => {
    
    const dummyData = [
        {
            message: '1: This should be in left',
            id:1
        },
        {
            message: '2: This should be dddddddddd dddddddddddd dddddddddddddddbgbgdgbbbbbb bbbbbbbbbbbbbb bbbbbdcdddddddd ddddddddinfdf fdfdddddddddd fdfdffdf right',
           id:1
        },
        {
            message: '3: This should be in left again',
            id:2
        }
        ,
        {
            message: '3: This should be in left again',
            id:2
        }
        ,
        {
            message: '3: This should be in left again',
            id:2
        }
        ,
        {
            message: '3: This should be in left again',
            id:1
        }
    ];

    const chatBubbles = dummyData.map((obj, i = 0) => {

        const reverse = obj.id  === 1 ? 'row-reverse' : 'row';
        return (
            <>
        <Container maxWidth={false} disableGutters  sx={{  height:'100%', display:'flex', flexDirection:reverse}} >
            <Avatar>A</Avatar>
            <Bubble key={i++} >
                <Typography  sx={{whiteSpace: 'pre-wrap' ,display: 'inline' }}>{obj.message}</Typography>
            </Bubble> 
        </Container>
        <div className={classes.spacer_xs}>
</div>
            </>
       
    )});
    return (
    <Box   sx={{bottom: 65,display:'flex',flexDirection:'column'}}>{chatBubbles}</Box>);
};
