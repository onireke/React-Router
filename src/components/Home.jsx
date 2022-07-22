import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this i believe in you</p>
      </main>

      <nav>
        <Link to="/About">About</Link>
      </nav>
    </div>
  );
}

export default Home;
