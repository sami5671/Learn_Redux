import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../components/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

export default router;
