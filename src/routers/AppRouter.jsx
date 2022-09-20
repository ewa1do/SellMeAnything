import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CartScreen } from '../pages/Cart/CartScreen';
import { FavoritesScreen } from '../pages/Favorites/FavoritesScreen';
import { HomeScreen } from '../pages/Home/HomeScreen';
import { LoginScreen } from '../pages/Login/LoginScreen';
import { OrdersScreen } from '../pages/Orders/OrdersScreen';
import { PaymentScreen } from '../pages/Payment/PaymentScreen';
import { ProfileScreen } from '../pages/Profile/ProfileScreen';
import { RegisterScreen } from '../pages/Register/RegisterScreen';
import { SellsScreen } from '../pages/Sells/SellsScreen';
import { BestSellersScreen } from '../pages/BestSellers/BestSellersScreen';
import { ProductsScreen } from '../pages/Products/ProductsScreen';
import { NewArrivalsScreen } from '../pages/NewArrivals/NewArrivalsScreen';
import { ShopByDeparmentScreen } from '../pages/ShopByDepartment/ShopByDeparmentScreen';
import { TrendingScreen } from '../pages/Trending/TrendingScreen';

// TODO: refactor the app router by creating sub routers to organize all this mess! 😫
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<HomeScreen />}
        />
        <Route
          path='login'
          element={<LoginScreen />}
        />
        <Route
          path='register'
          element={<RegisterScreen />}
        />
        <Route
          path='profile'
          element={<ProfileScreen />}
        />
        <Route
          path='cart'
          element={<CartScreen />}
        />
        <Route
          path='pay'
          element={<PaymentScreen />}
        />
        <Route
          path='orders'
          element={<OrdersScreen />}
        />
        <Route
          path='sells'
          element={<SellsScreen />}
        />
        <Route
          path='favs'
          element={<FavoritesScreen />}
        />
        {/* <Route
          path='/*'
          element={<PagesRoutes />}
        /> */}

        <Fragment>
          <Route
            path='new'
            element={<NewArrivalsScreen />}
          />
          <Route
            path='shop-by-department'
            element={<ShopByDeparmentScreen />}
          />
          <Route
            path='best-sellers'
            element={<BestSellersScreen />}
          />
          <Route
            path='trends'
            element={<TrendingScreen />}
          />
          <Route
            path='product/:productId'
            element={<ProductsScreen />}
          />
        </Fragment>
      </Routes>
    </BrowserRouter>
  );
};
