import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { BestSellersScreen } from '@/pages/BestSellers/';
import { CartScreen } from '@/pages/Cart/';
import { FavoritesScreen } from '@/pages/Favorites/';
import { HomeScreen } from '@/pages/Home/';
import { LoginScreen } from '@/pages/Login/';
import { NewArrivalsScreen } from '@/pages/NewArrivals/';
import { OrdersScreen } from '@/pages/Orders/';
import { PaymentScreen } from '@/pages/Payment/';
import { ProductsScreen } from '@/pages/Products/';
import { ProfileScreen } from '@/pages/Profile/';
import { RegisterScreen } from '@/pages/Register/';
import { SellsScreen } from '@/pages/Sells/';
import { ShopByDeparmentScreen } from '@/pages/ShopByDepartment/';
import { TrendingScreen } from '@/pages/Trending/';

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
