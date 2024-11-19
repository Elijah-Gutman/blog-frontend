export function PostsIndex(props) {
  console.log("These are the props:");
  console.log(props);
  return (
    <>
      <h1>All Posts ({props.posts.length} total)</h1>
      <div id="recipes-index" className="cards">
        {props.posts.map((posts) => (
          <div key={posts.id} className="card">
            <h2>{posts.title}</h2>
            <img src={posts.image} alt="" />
            <p>Blogger {posts.blogger}</p>
            <button>More info</button>
          </div>
        ))}
      </div>
    </>
  );
}
