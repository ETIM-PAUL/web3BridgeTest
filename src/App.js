import './App.css';
import Room from './components/Room';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="my-10">
          <Room title="Conference Room" />
        </div>

        <div className="flex flex-wrap gap-10 justify-center pb-10">
          <Room title="Room 1" />
          <Room title="Room 2" />
          <Room title="Room 3" />
          <Room title="Room 4" />
          <Room title="Room 5" />
          <Room title="Room 6" />
        </div>
      </div>
    </div>
  );
}

export default App;
