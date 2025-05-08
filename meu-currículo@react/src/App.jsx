import Curriculo from './pages/curriculo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // opcional
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Curriculo />} />
      </Routes>
    </Router>
  );
}
export default App;