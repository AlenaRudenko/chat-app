import { type UnknownAction } from '@reduxjs/toolkit'

export const isErrorFn = (action: UnknownAction) => {
  return action.type.endsWith('rejected')
}
