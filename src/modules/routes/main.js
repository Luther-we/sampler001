import { MpcStudio } from '../../pages/mpcStudio/MpcStudio'
import { Layout } from '../../scratch/Layout'

export const mainRoutes =
[
  {
    path : '/mpc-studio',
    component: MpcStudio
  },
  {
    path: '/scratch/touch',
    component: Layout
  }
]
