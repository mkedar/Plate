import './App.css';
import './header.css';
import './properties.css'
import HeaderSetup from './HeaderSetup.tsx';
import InputBox from './InputBox.tsx'
import OutputBox from './OutputBox.tsx';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#FFFFFF', height: '844px', width: '390px', position: 'relative' }}>      
      <HeaderSetup/>
      <InputBox/>
      <OutputBox/>  
    </div>
  );
}

export default App;
