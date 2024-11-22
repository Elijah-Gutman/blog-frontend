import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreate(params);
    event.target.reset();
  };
  return (
    <div>
      <p className="d-inline-flex gap-1">
        <a
          className="btn btn-primary"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Create a new post
        </a>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <div id="posts-new">
            <h1>New post</h1>
            <form onSubmit={handleSubmit}>
              <div>
                Title: <input name="title" type="text" />
              </div>
              <div>
                Body: <input name="body" type="text" />
              </div>
              <div>
                Image: <input name="image" type="text" />
              </div>
              <button type="submit">Create post</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div id="posts-new">
  <h1>New post</h1>
  <form onSubmit={handleSubmit}>
    <div>
      Title: <input name="title" type="text" />
    </div>
    <div>
      Body: <input name="body" type="text" />
    </div>
    <div>
      Image: <input name="image" type="text" />
    </div>
    <button type="submit">Create post</button>
  </form>
</div>; */
}
