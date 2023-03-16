// Provider takes store as an input to sync it with react app
import { Provider } from "react-redux";
import store from "./redux/store";

import CakeContainer from "./components/CakeContainer";
import "./App.css";
import HookCakeContainer from "./components/HookCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* In This Component classical connect() approach is shown  */}
        <h2 style={{ color: "green" }}>Using connect()</h2>
        <CakeContainer />
        <IceCreamContainer/>
        <br />
        <hr />
        {/* In this component we are using the Hooks provided by react-redux */}
        <h2 style={{ color: "green" }}>Using Hooks</h2>
        <HookCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
