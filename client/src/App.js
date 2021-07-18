import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import Home from './Pages/Home';
import NoticeBoard from './Components/NoticeBoard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Login /> */}
      <NoticeBoard />
      <Footer />
    </div>
  );
}

export default App;
