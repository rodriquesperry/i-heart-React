import HeartLogo from './heart.svg';
import './App.css';

const Header = (props) => {
  return <div className='App-header'>{props.msg}</div>;
};

const Heart = (props) => {
  return (
    <div className='heart'>
      <img className='heart-img' src={HeartLogo} alt='heart' />
      <p className='heart-message'>{props.msg}</p>
    </div>
  );
};

function App() {
  const love = 'I ❤️ React!';
  const message = 'cool cud';

  return (
    <>
      <Header msg={love} />
      <Heart msg={message} />;
    </>
  );
}

export default App;
