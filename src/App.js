import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Post from './Post';
import SideMenu from './SideMenu';
import TagButton from './TagButton';
function App() {
// ==> create array content post data
  const postData = [

    {
      id: 1,
      title:"This is post Title",
      postBody:"This is post Body",
    },

    {
      id: 2,
      title:"This is post Title",
      postBody:"This is post Body",
    },

    {
      id: 3,
      title:"This is post Title",
      postBody:"This is post Body",
    },
  ];
  // ==> create map fn to iterate over the array content
  const postList = postData.map((post)=>{
    return<Post key={post.id} postName={postData.postName} />
  });

  return (
    <div className="App">
      <Header/>
      
      {/* Post Container */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ width: "60%", display: "flex", justifyContent: "center" }}
        >
          {/* == POSTS CONTAINER == */}
          <div style={{ width: "70%" }}>{postList}</div>

          <div style={{ width: "30%", marginTop: "25px" }}>
            <SideMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
