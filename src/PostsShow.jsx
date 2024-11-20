export function PostsShow(props) {
  return (
    <div>
      <h2>{props.post.title}</h2>
      <p>Body: {props.post.body}</p>
      <p>
        Image: <img src={props.post.image} alt="" />
      </p>
    </div>
  );
}
