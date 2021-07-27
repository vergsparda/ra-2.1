import Comp from './components/Comp.jsx';
import './App.css';

function App() {
  const data = {
    name: 'Алексей',
    age: 31,
    workPlace: 'RZD'
  }

  return (
    <div>
     <Comp data={data}/>;
    </div>
  );
}

export default App;
