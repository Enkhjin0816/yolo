import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';
import Content from './components/content';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Content />} />
      </Routes>
    </Router>
  );
}

export default App;