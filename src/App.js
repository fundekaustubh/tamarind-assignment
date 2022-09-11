import { Routes, Route } from "react-router-dom"
import './App.css';
// import Navbar from './Navbar';
// Import components
import Upload from './Upload';
const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="*" element={<Upload />} />
      </Routes>
    </>
  );
}

export default App;
