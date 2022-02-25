import { Logo } from './assests/logo';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import {BrowserRouter,
Route,
Routes,
Link} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
