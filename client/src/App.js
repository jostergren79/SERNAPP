import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { AddEditPost } from './pages/AddEditPost'
import { PostInfo } from './pages/PostInfo'
import { About } from './pages/About'
import { Header } from './components/Header'


function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/addPost' element={<AddEditPost />}></Route>
        <Route exact path='/editPost/:id' element={<AddEditPost />}></Route>
        <Route exact path='/postInfo/:id' element={<PostInfo />}></Route>
        <Route exact path='/about' element={<About />}></Route>

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
