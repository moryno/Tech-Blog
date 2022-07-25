import Footer from "./Footer";
import Header from "./Header";
import Post from "./Post";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Posts />
      <Sidebar />
    </div>
  );
}

export default App;
