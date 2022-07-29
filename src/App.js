
import './App.css';
import Cmp1 from './components/Cmp1';
import Cmp2 from './components/Cmp2';
import Cmp3 from './components/Cmp3';
import { Resizable } from 'react-resizable';

function App() {
  return (
    <div className="App">
    <div className='container'>
    
      <Cmp1/>
      <Cmp2/>
    
    </div>
    <div className='bottom'>
      <Cmp3/>
    </div>
    </div>
  );
}

export default App;
