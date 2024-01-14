// import { Box, CircularProgress } from '@mui/material'
// import { Suspense, useEffect } from 'react'
// import { Await, Navigate, redirect, useLoaderData, useNavigate } from 'react-router-dom'

// const fakeRequest = <Response,>(time: number, data?: Response) => {
//   return new Promise<Response | void>((resolve, reject) => {
//     setTimeout(() => {
//       const random = Math.random()

//       if (random > 0.5) {
//         console.log('sleep end')
//         if (data) {
//           resolve(data)
//         } else resolve()
//       } else reject('server error')
//     }, time)
//   })
// }

// const TestCOmponent = () => {
//   console.log()
//   return <div>test</div>
// }
// type Props = {
//   userPromise: Promise<string>
// }
// export const Test = () => {
//   const func = async () => {
//     console.log('code 1')
//     try {
//       const result = await fakeRequest(3000, 'user')
//       console.log(result)
//     } catch (error) {
//       console.log('error', error)
//     }
//     console.log('code 2')
//     fakeRequest(1000, 'dsd')
//       .then((resolve) => console.log('resolve2', resolve))
//       .catch((err) => console.log('error2', err))
//     console.log('code 3')
//   }
//   useEffect(() => {
//     func()
//   }, [])
//   console.log('test component')
//   const user = useLoaderData()

//   return (
//     <Box sx={{ display: 'flex', minHeight: '100vh', alignItems: 'center', backgroundColor: 'yellow' }}>
//       <Suspense fallback={<CircularProgress />}>
//         <Await
//           children={<TestCOmponent />}
//           errorElement={<Navigate to='/auth' replace />}
//           resolve={(user as Props).userPromise}
//         />
//       </Suspense>
//     </Box>
//   )
// }
