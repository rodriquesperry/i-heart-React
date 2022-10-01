import HeartLogo from './heart.svg';
import './App.css';

const Heart = (props) => {
  return (
    <div className='heart'>
      <img className='heart-img' src={HeartLogo} alt='heart' />
      <p className='heart-message'>{props.msg}</p>
    </div>
  );
};

function App() {
  const message = 'cool cud';

  return  <Heart msg={message} />;
}

export default App;
