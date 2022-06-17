import './App.css';
import Child1 from './Components/Child1';
import Child2 from './Components/Child2';
import './App.css'

const styledText = {
  fontSize: '25px',
  textAlign: 'center',
  margin: '40px',
  border: '1px solid black'
}

const imageStyle= {
  borderRadius: '50%'
}

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Child1 styledText={styledText} />
      <Child2 styledText={styledText} />
      <img style={imageStyle} src='http://placekitten.com/200/300' alt='cute kitten' />
    </div>
  );
}

export default App;
