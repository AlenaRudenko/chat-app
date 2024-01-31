import {  ListItem, Skeleton, Typography } from '@mui/material'

export const SkeletonChannel = () => {
  return (
    <ListItem
      sx={{
        display: 'block',
        ml: '2px',
        minHeight: 48,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
      }}
      disablePadding
    >
      <div
        style={{
          display: 'flex',
          marginLeft: '2px',
          width: '100%',
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Skeleton width={32} height={32} variant='circular' />

        <Skeleton width='70%'>
          <Typography variant='h2'>.</Typography>
        </Skeleton>
      </div>
    </ListItem>
  )
}
