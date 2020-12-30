import 'react-redux'

import { AplicationState } from './index'

declare module 'react-redux' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultRootState extends AplicationState {}
}
