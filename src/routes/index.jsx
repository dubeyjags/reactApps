import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <h1>Dashboard</h1>
   <div className="dashboard">
  <Link to="/auth" className="app-card card--teal">
    <div className="card-top">
      <div className="card-icon">🔑</div>
      <div className="card-arrow">↗</div>
    </div>
    <p className="card-name">FreeAPI: Build an Authentication App</p>
    <p className="card-desc">
      Full auth flow with register, login, profile view, and logout. Login
      sessions stored with LocalStorage.
    </p>
    <div className="card-tags">
      <span className="tag">React</span>
      <span className="tag">FreeAPI</span>
      <span className="tag">fetch</span>
      <span className="tag">LocalStorage</span>
      <span className="tag">Vercel</span>
    </div>
  </Link>

  <Link to="/videos" className="app-card card--blue">
    <div className="card-top">
      <div className="card-icon">📺</div>
      <div className="card-arrow">↗</div>
    </div>
    <p className="card-name">FreeAPI: YouTube Videos Listing UI</p>
    <p className="card-desc">
      Fetches YouTube video data and displays thumbnails, titles, and metadata
      in a responsive card grid.
    </p>
    <div className="card-tags">
      <span className="tag">React</span>
      <span className="tag">FreeAPI</span>
      <span className="tag">fetch</span>
      <span className="tag">Vercel</span>
    </div>
  </Link>

  <Link to="/products" className="app-card card--coral">
    <div className="card-top">
      <div className="card-icon">🛍️</div>
      <div className="card-arrow">↗</div>
    </div>
    <p className="card-name">FreeAPI: Product Listing Interface</p>
    <p className="card-desc">
      Displays a dummy product catalog with image, name, price, and description
      in a clean card layout.
    </p>
    <div className="card-tags">
      <span className="tag">React</span>
      <span className="tag">FreeAPI</span>
      <span className="tag">fetch</span>
      <span className="tag">Vercel</span>
    </div>
  </Link>

  <Link to="/quotes" className="app-card card--purple">
    <div className="card-top">
      <div className="card-icon">💬</div>
      <div className="card-arrow">↗</div>
    </div>
    <p className="card-name">FreeAPI: Quotes Listing Application</p>
    <p className="card-desc">
      Fetches random inspirational quotes and displays the quote text and author
      in styled cards.
    </p>
    <div className="card-tags">
      <span className="tag">React</span>
      <span className="tag">FreeAPI</span>
      <span className="tag">fetch</span>
      <span className="tag">Vercel</span>
    </div>
  </Link>

  <Link to="/jokes" className="app-card card--pink">
    <div className="card-top">
      <div className="card-icon">😂</div>
      <div className="card-arrow">↗</div>
    </div>
    <p className="card-name">FreeAPI: Jokes Viewer Application</p>
    <p className="card-desc">
      Loads random jokes with a setup and punchline format, displayed in fun
      styled cards.
    </p>
    <div className="card-tags">
      <span className="tag">React</span>
      <span className="tag">FreeAPI</span>
      <span className="tag">fetch</span>
      <span className="tag">Vercel</span>
    </div>
  </Link>

  <Link to="/cats" className="app-card card--amber">
    <div className="card-top">
      <div className="card-icon">😸</div>
      <div className="card-arrow">↗</div>
    </div>
    <p className="card-name">FreeAPI: Random Cat Viewer</p>
    <p className="card-desc">
      Fetches and displays random cat images in a gallery grid. Click to load
      a new cat on demand.
    </p>
    <div className="card-tags">
      <span className="tag">React</span>
      <span className="tag">FreeAPI</span>
      <span className="tag">fetch</span>
      <span className="tag">Vercel</span>
    </div>
  </Link>

  <Link to="/meals" className="app-card card--green">
    <div className="card-top">
      <div className="card-icon">🍽️</div>
      <div className="card-arrow">↗</div>
    </div>
    <p className="card-name">FreeAPI: Meals Listing Interface</p>
    <p className="card-desc">
      Search and explore recipes by name or ingredient. Displays meal image,
      category, and details in recipe cards.
    </p>
    <div className="card-tags">
      <span className="tag">React</span>
      <span className="tag">FreeAPI</span>
      <span className="tag">fetch</span>
      <span className="tag">Vercel</span>
    </div>
  </Link>

  <Link to="/users" className="app-card card--gray">
    <div className="card-top">
      <div className="card-icon">👥</div>
      <div className="card-arrow">↗</div>
    </div>
    <p className="card-name">FreeAPI: Random Users UI</p>
    <p className="card-desc">
      Fetches dummy user profiles and shows name, avatar, and contact details
      in a directory-style card layout.
    </p>
    <div className="card-tags">
      <span className="tag">React</span>
      <span className="tag">FreeAPI</span>
      <span className="tag">fetch</span>
      <span className="tag">Vercel</span>
    </div>
  </Link>
</div>

    </>
  );
}
