import { Header } from "./Header";
import { PostsPage } from "./PostsPage";
import { Footer } from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <PostsPage />
      <Footer year={2024} />
    </div>
  );
}

export default App;
