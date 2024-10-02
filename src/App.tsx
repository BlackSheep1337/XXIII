import './App.css';
import Tabs from './Components/Tabs/Tabs';
import Header from './Components/Header/Header';
import ProfileConfiguration from './Components/ProfileConfiguration/ProfileConfiguration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Tabs />} />
          <Route path="/profile-configuration" element={<ProfileConfiguration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
