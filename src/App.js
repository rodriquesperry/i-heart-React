import Header from './components/Header';
import HeartsList from './components/HeartsList';

import './App.css';

function App() {
  const love = 'I ❤️ React!';

  return (
    <>
      <Header msg={love} />
      <HeartsList />;
    </>
  );
}

export default App;
