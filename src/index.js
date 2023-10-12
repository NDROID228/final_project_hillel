import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './containers/LoginPage/LoginPage'; //<Login /> - ProductTable component
import ProductTable from './containers/ProductTablePage/ProductTablePage'; //<ProductTable /> - ProductTable component
import ProductPreview from './containers/ProductPreviewPage/ProductPreviewPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductTable />
  </React.StrictMode>
);