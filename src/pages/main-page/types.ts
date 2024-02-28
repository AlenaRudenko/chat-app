import { ReactNode } from 'react'

export type Props = {
  userPromise: Promise<string>
}

export type TProps = {
  children: ReactNode
}
