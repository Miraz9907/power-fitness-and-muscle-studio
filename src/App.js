// import logo from './logo.svg';
import './App.css';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import Question from './components/Questions/Question';

function App() {
  return (
    <div>
      <Header></Header>
      <Categories></Categories>
      <Question></Question>
    </div>
  );
}

export default App;
