import './App.css';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Modal>
        <h2>10% off coupon code!</h2>
        <p>use the code NINJA at checkout</p>
      </Modal>
    </div>
  );
}

export default App;
