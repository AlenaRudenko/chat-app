import { ListItem, styled } from '@mui/material'
import { IProps } from './types'

const Bubble = ({ children }: IProps) => {
  const Bubble = styled(ListItem)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: '41.59px',
    width: 'auto',
    maxWidth: '50%',
    minWidth: '5%',
    height: 'auto',
    margin: '5px',
    padding: '10px',
    display: 'inline-block',
    textAlign: 'center',
    overflowWrap: 'break-word',
  }))
  return <Bubble>{children}</Bubble>
}
Bubble.displayName = 'MemoComp'
export default Bubble
