import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return (
    <div>
      <div>안녕하세요 이거 뜨나요?</div>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/movie/:id' element={<Detail />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
