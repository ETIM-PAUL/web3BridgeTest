import React from 'react';
import './App.css';
import Room from './components/Room';

function App() {
  const [allPersons, setAllPersons] = React.useState([])
  return (
    <div className="App">
      <div className="App-header">
        <div className="my-10">
          <Room title="Conference Room" type="conference" setAllPersons={setAllPersons} allPersons={allPersons} />
        </div>

        <div className="flex flex-wrap gap-10 justify-center pb-10">
          <Room title="Room 1" type="room" setAllPersons={setAllPersons} allPersons={allPersons} />
          <Room title="Room 2" type="room" setAllPersons={setAllPersons} allPersons={allPersons} />
          <Room title="Room 3" type="room" setAllPersons={setAllPersons} allPersons={allPersons} />
          <Room title="Room 4" type="room" setAllPersons={setAllPersons} allPersons={allPersons} />
          <Room title="Room 5" type="room" setAllPersons={setAllPersons} allPersons={allPersons} />
          <Room title="Room 6" type="room" setAllPersons={setAllPersons} allPersons={allPersons} />
        </div>
      </div>
    </div>
  );
}

export default App;
