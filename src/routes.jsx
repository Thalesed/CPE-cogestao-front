import {
    RouterProvider,
    createBrowserRouter,
    Route,
    createRoutesFromElements,
  } from "react-router-dom";

import { Home} from "./pages";

const router = createBrowserRouter(
createRoutesFromElements(
    <Route>
        <Route>
            <Route path="/" element={<Home />} />
        </Route>
    </Route>
)
);

export default function Routes() {
return <RouterProvider router={router} />;
}