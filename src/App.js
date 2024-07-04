import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar';
import Home from './pages/Home';
import CompileStage from './pages/compilePage';
import ShowContext from './pages/contextPage';
import CommonPage from './pages/globel/CommonPage';

const App = () => {

  return (

    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<CommonPage heading='News Feed' text='NO NEWS' />} />
        <Route path='/chats' element={<CommonPage heading='Chats' text='No Chats' />} />
        <Route path='/connections' element={<CommonPage heading='Connections' text='No Connections Found' />} />
        <Route path='/findLawyer' element={<CommonPage heading='Find Lawyer' text='Right Now No lawyers avaliable' />} />
        <Route path='/context' element={<CompileStage />} />
        <Route path='/start' element={<ShowContext />} />

      </Routes>
    </Router>
  )
}

export default App;
