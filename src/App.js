import './App.css';
import Gallery from './components/Gallery';
import Home from './components/Home';
import {
  BrowserRouter,
  // BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Members from './components/Members';
import Equipments from './components/Equipments';
import Contest from './components/Contest';
import Blogs from './components/Blogs';
import Footer from "./components/Footer"
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from './firebase';
import SignIn from './components/SigIn';

function App() {
  
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" exact element={
        user? <Home user={user}/> : <SignIn />
      } />
      <Route path="/members" element={user? <Members user={user}/> : <SignIn />} />
      <Route path="/gallery" element={user? <Gallery user={user}/> : <SignIn />} />
      <Route path="/contest" element={user? <Contest user={user}/> : <SignIn />} />
      <Route path="/equipment" element={user? <Equipments user={user}/> : <SignIn />} />
      <Route path="/blogs" element={user? <Blogs user={user}/> : <SignIn />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
