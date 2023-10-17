import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./Routes/privateRoute";

import LoginPage from "./containers/LoginPage/LoginPage"; //<Login /> - ProductTable component
import ProductTablePage from "./containers/ProductTablePage/ProductTablePage"; //<ProductTable /> - ProductTable component
import ProductPreviewPage from "./containers/ProductPreviewPage/ProductPreviewPage"; //<ProductPreview /> - ProductPreview component
import ErrorPage from "./containers/ErrorPage/ErrorPage";
import ProductDetails from "./containers/ProductDetails/ProductDetails";

const AppRouter = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />} >
            <Route path="/table" element={<ProductTablePage />} />
            <Route path="/preview" element={<ProductPreviewPage />} />
            <Route path="/preview/:productID" element={<ProductDetails />}/>
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
