import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Textform heading='Enter the text to analyze' />
    </div>
    </>
  );
}

export default App;
