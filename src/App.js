import './App.css';
import Room from './components/Room';

function App() {
  const [allPersons, setAllPersosn] = React.useState([])
  return (
    <div className="App">
      <div className="App-header">
        <div className="my-10">
          <Room title="Conference Room" type="conference" />
        </div>

        <div className="flex flex-wrap gap-10 justify-center pb-10">
          <Room title="Room 1" type="room" />
          <Room title="Room 2" type="room" />
          <Room title="Room 3" type="room" />
          <Room title="Room 4" type="room" />
          <Room title="Room 5" type="room" />
          <Room title="Room 6" type="room" />
        </div>
      </div>
    </div>
  );
}

export default App;
