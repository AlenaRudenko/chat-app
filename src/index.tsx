import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "@/components/App";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");
if (!root) {
  throw new Error("root not found");
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/auth",
        element: <div>login or sign up</div>,
      },
    ],
  },
]);
const container = createRoot(root);
container.render(<RouterProvider router={router} />);
