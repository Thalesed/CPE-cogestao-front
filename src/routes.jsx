import {
    RouterProvider,
    createBrowserRouter,
    Route,
    createRoutesFromElements,
  } from "react-router-dom";

import AppLayout from './components/AppLayout/Applayout';
import { Home} from "./pages";

const router = createBrowserRouter(
createRoutesFromElements(
    <Route>
        <Route path='/' element={<AppLayout />}>
            <Route index element={<Home />} />
        </Route>
    </Route>
)
);

export default function Routes() {
return <RouterProvider router={router} />;
}