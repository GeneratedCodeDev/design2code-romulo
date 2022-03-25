import { Routes, Route } from 'react-router-dom';

import ProductCardPage from '../pages/ProductCard' 


const LayoutRoutes = () => (
  <Routes>
         <Route path='/product-card' element={<ProductCardPage />} />

  </Routes>
);
export default LayoutRoutes;
