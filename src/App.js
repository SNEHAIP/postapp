import logo from './logo.svg';
import './App.css';
import AddName from './components/AddName';
import SearchName from './components/SearchName';
import DeleteName from './components/DeleteName';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddName/>}/>
      <Route path='/Search' element={<SearchName/>}/>
      <Route path='/Delete' element={<DeleteName/>}/>
      <Route path='/ViewAll' element={<ViewAll/>}/>         

    </Routes>
    </BrowserRouter>
  );
}

export default App;
