// import Message from './Message'

import Alerts from "./components/Alerts";
import Button from "./components/Button";
// import ListGroup from "./components/ListGroup";

// let cities = ["London", "Paris", "New York", "Tokyo", "Sydney"];

// function handleSelectItem(item: string) {
//   console.log("Item selected", item);
// }

function myClick() {
  console.log("click1");
}

function App() {
  return (
    <div id="div2">
      {/* <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      <Alerts>
        <h3>Simple react test!</h3>here is the explnation...
      </Alerts>
      <Button color="primary" myOnClick={myClick}>
        My button
      </Button>
    </div>
  );
}

export default App;
