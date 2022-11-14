import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Landing, Register, ErrorPage } from './pages';
import {
  AddJob,
  AllJob,
  Profile,
  Stats,
  SharedLayout,
} from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route path='add-job' element={<AddJob />} />
          <Route path='all-job' element={<AllJob />} />
          <Route path='profile' element={<Profile />} />
          <Route path='stats' element={<Stats />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
