import { Provider } from "react-redux";
import Counter from "./components/Counter.js";
import Counter2 from "./components/Counter2.js";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Counter />
      {/* <Counter2 /> */}
    </Provider>
  );
}

export default App;
