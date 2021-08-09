import Header from "./components/views/Header";
import "./styles/App.scss";
import SideBar from "./components/views/SideBar/SideBar";
import Main from "./components/views/Main/Main";

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="mainWrapper">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
