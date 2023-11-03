import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Card from './Card/Card';
import Collection from './Collection/Collection';
import Cities from './Component/Cities/Cities';
import CTA from './CTA/CTA';

function App() {
  return (
    <div className="App">
      <Header/>
      <Card/>
      <Collection/>
      <Cities/>
      <CTA/>
      
       </div>
  );
}

export default App;
