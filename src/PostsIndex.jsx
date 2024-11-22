export function PostsIndex(props) {
  console.log("These are the props:");
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All posts ({props.posts.length} total)</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.posts.map((post) => (
          <div key={post.id} className="col">
            <div className="card h-100">
              <img src={post.image} className="card-img-top h-75 object-fit-cover" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">Body: {post.body}</p>
                <button onClick={() => props.onShow(post)} className="btn btn-primary">
                  More info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
