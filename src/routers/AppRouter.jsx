import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CartScreen } from '../components/Cart/CartScreen';
import { HomeScreen } from '../components/Home/HomeScreen';
import { LoginScreen } from '../components/Login/LoginScreen';
import { PaymentScreen } from '../components/Payment/PaymentScreen';
import { ProfileScreen } from '../components/Profile/ProfileScreen';
import { RegisterScreen } from '../components/Register/RegisterScreen';

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
      </Routes>
    </BrowserRouter>
  );
};
