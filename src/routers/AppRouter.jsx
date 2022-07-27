import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeScreen } from '../components/Home/HomeScreen';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<HomeScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
};
