import {createBrowserRouter, RouterProvider} from "react-router";
import Root from "./components/root.tsx";

export default function App() {
    const router = createBrowserRouter(
        [
            {path: "*", Component: Root},
        ]
    );
    return (
        <>
            <RouterProvider router={router}/>
        </>
  );
}
