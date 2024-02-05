import { ListItem, Skeleton, Typography } from '@mui/material'
import { useDrawer } from '../../../../store/drawerContext'

export const SkeletonChannel = () => {
  const { isDrawerOpen } = useDrawer()
  return (
    <>
      {Array(20)
        .fill('')
        .map((i, index) => (
          <ListItem
            key={index}
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
              <Skeleton height={32} variant='circular' width={32} />
              {isDrawerOpen && (
                <Skeleton width='70%'>
                  <Typography variant='h2'>.</Typography>
                </Skeleton>
              )}
            </div>
          </ListItem>
        ))}
    </>
  )
}
