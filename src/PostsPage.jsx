import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";

export function PostsPage() {
  let posts = [
    {
      id: 1,
      title: "Cities",
      blogger: "Charles Dickens",
      image: "https://book.io/wp-content/uploads/2023/08/Manette_Lucie-2.png",
    },
    {
      id: 2,
      title: "A starry night",
      blogger: "Van Gogh",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    },
    {
      id: 3,
      title: "Greatness",
      blogger: "Jordan Peterson",
      image: "https://accidentallyretired.com/wp-content/uploads/2023/11/12-Rules-for-Life.jpg",
    },
    {
      id: 4,
      title: "Cities",
      blogger: "Charles Dickens",
      image: "https://book.io/wp-content/uploads/2023/08/Manette_Lucie-2.png",
    },
    {
      id: 5,
      title: "A starry night",
      blogger: "Van Gogh",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    },
    {
      id: 6,
      title: "Greatness",
      blogger: "Jordan Peterson",
      image: "https://accidentallyretired.com/wp-content/uploads/2023/11/12-Rules-for-Life.jpg",
    },
  ];
  return (
    <main>
      <PostsNew />
      <PostsIndex posts={posts} />
    </main>
  );
}
