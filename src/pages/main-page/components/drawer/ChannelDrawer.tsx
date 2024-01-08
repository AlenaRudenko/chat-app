import { Avatar, Divider, List, ListItem, ListItemButton } from '@mui/material'
import ListItemText from '@mui/material/ListItemText'
import { memo } from 'react'
import { Drawer } from './styles'
import { TProps } from './types'

function randomColor() {
  let hex = Math.floor(Math.random() * 0xffffff)
  let color = '#' + hex.toString(16)

  return color
}

const ChannelDrawer = memo(({ isDrawerOpen }: TProps) => {
  return (
    <Drawer anchor='left' open={isDrawerOpen} variant='permanent'>
      <Divider sx={{ border: 'none' }} />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} sx={{ display: 'block', ml: '2px' }} disablePadding>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: 'initial',
              }}
            >
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  mr: isDrawerOpen ? 3 : 'auto',
                  justifyContent: 'center',
                  backgroundColor: randomColor(),
                }}
              >
                {text[0].toUpperCase()}
              </Avatar>
              <ListItemText primary={text} sx={{ opacity: isDrawerOpen ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
})
ChannelDrawer.displayName = 'ChannelDrawer'
export default ChannelDrawer
