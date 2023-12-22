import { Avatar, Box, Container, ListItem, Theme, Typography, createStyles, makeStyles, styled } from '@mui/material';
import classes from './ChatLayout.module.scss'


const Bubble = styled(ListItem)(({theme}) => ({
    backgroundColor:theme.palette.background.paper,
    borderRadius: '41.59px',
    width:'auto',
    maxWidth:'50%',
    minWidth:'5%',
    height:'auto',
    margin: '5px',
     padding: '10px',
    display: 'inline-block',
    textAlign:'center',
    overflowWrap: 'break-word'
}))

export const ChatLayout = () => {
    
    const dummyData = [
        {
            message: 'start',
            id:1
        },
        {
            message: '2: This shoul fdfdffdf right',
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
            id:10
        }
        ,
        {
            message: '3: This should be in left again',
            id:1
        },
        {
            message: '3: This should be in left again',
            id:2
        }
        ,
        {
            message: 'end',
            id:2
        },{
            message: '3: This should be in left again',
            id:2
        }
        ,
        {
            message: '3: This should be in left again',
            id:1
        },
        {
            message: '3: This should be in left again',
            id:2
        }
        ,
        {
            message: 'end',
            id:2
        },{
            message: '3: This should be in left again',
            id:2
        }
        ,
        {
            message: '3: This should be in left again',
            id:1
        },
        {
            message: '3: This should be in left again',
            id:2
        }
        ,
        {
            message: 'end',
            id:2
        },{
            message: '3: This should be in left again',
            id:2
        }
        ,
        {
            message: '3: This should be in left again',
            id:1
        },
        {
            message: '3: This should be in left again',
            id:2
        }
        ,
        {
            message: 'end',
            id:2
        },{
            message: '3: This should be in left again',
            id:2
        }
        ,
        {
            message: '3: This should be in left again',
            id:1
        },
        {
            message: '3: This should be in left again',
            id:2
        }
        ,
        {
            message: 'end',
            id:2
        },{
            message: '3: This should be in left again',
            id:2
        }
        ,
        {
            message: '3: This should be in left again',
            id:1
        },
        {
            message: '3: This should be in left again',
            id:2
        }
        ,
        {
            message: 'end',
            id:2
        },{
            message: '3: This should be in left again',
            id:2
        }
        ,
        {
            message: '3: This should be in left again',
            id:1
        },
        {
            message: '3: This should be in left again',
            id:2
        }
        ,
        {
            message: 'ssssssssssssssend',
            id:2
        }

        
    ];

    const chatBubbles = dummyData.map((obj, i = 0) => {

        const reverse = obj.id  === 1 ? 'row-reverse' : 'row';
        return (
            <>
        <Container maxWidth={false}  disableGutters  sx={{padding:'0px 20px',height:'100%', display:'flex', flexDirection:reverse, alignItems:'center'}} >
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
    <Box   sx={{ maxHeight: `calc(100vh - 128px)`, overflow: 'auto', margin:'64px 0px',display:'flex',flexDirection:'column', width:'100%'}}>{chatBubbles}</Box>);
};
