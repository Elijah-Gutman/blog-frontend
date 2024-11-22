export function PostsShow({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>Body: {post.body}</p>
      <p>
        Image: <img src={post.image} alt="" />
      </p>
      <form>
        <div>
          Name: <input defaultValue={post.name} name="name" type="text" />
        </div>
        <div>
          Body: <input defaultValue={post.body} name="url" type="text" />
        </div>
        <div>
          Image: <input defaultValue={post.image} name="width" type="text" />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
