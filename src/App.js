import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
 
import './App.css';
import AddCustomer from './Components/AddCustomer';
import GenerateInvoice from './Components/GenerateInvoice';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <GenerateInvoice></GenerateInvoice>
    </div>
  );
}

export default App;
