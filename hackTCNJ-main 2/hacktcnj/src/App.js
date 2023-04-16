import './App.css';
import Header from './components/Header';
import PersonIcon from '@mui/icons-material/Person';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Swiping from './pages/Swiping';
import Chats from './pages/Chats';
import ChatScreen from './pages/ChatScreen';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Aboutus from './pages/Aboutus';
import Register from './pages/Register';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route exact path="/aboutus" element={<Aboutus/>}/>
          <Route exact path="/" element={<Landing/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/onboarding" element={<h1>Onboarding</h1>}/>
          <Route exact path="/swiping" element={<Swiping/>}/>
          <Route exact path="/self" element={<h1>Self</h1>}/>
          <Route exact path="/profile" element={<h1>Profile</h1>}/>
          <Route exact path="/chat" element={<Chats/>}/>
          <Route exact path="/chatscreen" element={<ChatScreen/>}/>
          <Route exact path="/register" element={<Register/>}/>

        </Routes>
      </Router>


      {/**Header */}
      {/**Cards */}
      {/**Buttons */}

      {/**Chats screen */}
      {/**Individual chat screen */}
    </div>
  );
}

export default App;
