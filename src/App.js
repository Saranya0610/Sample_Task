import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <div className="main">
    < h2>CRUD operations</h2>
      <BrowserRouter>
        <Routes>
          <Route exact path="/Update" element={<Update />} />
          <Route exact path="/Read" element={<Read />} />
          <Route exact path="/Create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

