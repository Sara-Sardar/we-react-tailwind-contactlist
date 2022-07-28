import './global.css';
import NavigationBar from './components/NavigationBar';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import FindTalents from './pages/FindTalents';
import FindJobs from './pages/FindJobs';
import PostJobs from './pages/PostJobs';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      
          <NavigationBar />
          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/findtalents" element={<FindTalents />} />
              <Route path="/findjobs" element={<FindJobs />} />
              <Route path="/postjobs" element={<PostJobs />} />
            </Routes>



            <Footer/>

            
    </div>
  );
}

export default App;
