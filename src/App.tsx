import { Header } from "./components/Header/Header";
import "./root.scss";
import { Color } from "./pages/Color";
import { ButtonPage } from "./pages/Button";

function App() {
  return (
    <div className="App p-8 grid gap-8">
      <Header />
      <Color />
      <ButtonPage />
    </div>
  );
}

export default App;
