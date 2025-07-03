import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Main } from './routes/main/main'
import { Trainersw } from "./routes/trainers-w/trainers"
import { Trainersm } from "./routes/trainers-m/trainers"
import { Sneakersw } from "./routes/sneakers-w/sneakers"
import { Sneakersm } from "./routes/sneakers-m/sneakers"
import { Shoesw } from "./routes/shoes-w/shoes"
import { Katalog } from "./routes/katalog/katalog"

// eslint-disable-next-line prefer-const
let router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/Trainersw',
        element: <Trainersw />,
      },{
        path: '/Trainersm',
        element: <Trainersm />,
      },{path: '/Sneakersw',
        element: <Sneakersw />,
      },{path: '/Sneakersm',
        element: <Sneakersm />,
      },{
        path: '/Shoesw',
        element: <Shoesw />,
      },{
        path: '/katalog',
        element: <Katalog />,
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
