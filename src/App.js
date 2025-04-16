// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Post from './Post';
import SideMenu from './SideMenu';
// import TagButton from './TagButton';
function App() {
  return (
    <div className="App">
      <Header/>
      
      {/* Post Container */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ width: "60%", display: "flex", justifyContent: "center" }}
        >
          {/* == POSTS CONTAINER == */}
          <div style={{ width: "70%" }}>
            <Post postName="What is React ? " postBody="React is a JavaScript library. used to bulid a UI components" />
            <Post postName="Why We Need React " postBody="to build fast, interactive user interfaces efficiently using reusable components, a virtual DOM for performance, and a unidirectional data flow for predictable state management." />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>

          <div style={{ width: "30%", marginTop: "25px" }}>
            <SideMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
