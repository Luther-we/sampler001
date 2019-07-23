import { MpcStudio } from '../../pages/mpcStudio/MpcStudio'
import { Layout } from '../../scratch/Layout'
import Layout2 from '../../scratch/layout2/Layout2'

export const mainRoutes =
[
  {
    path : '/mpc-studio',
    component: MpcStudio
  },
  {
    path: '/scratch/touch',
    component: Layout
  },
  {
    path: '/scratch/layout2',
    component: Layout2
  }
]
