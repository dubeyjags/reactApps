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
        <p className="card-desc">Authentication with freeApi. Register, login, profile, logout</p>
        <div className="card-tags">
          <span className="tag">React</span>
          <span className="tag">freeApi</span>
          <span className="tag">fetch</span>
          <span className="tag">vercel</span>
        </div>
      </Link>
      <Link to="/videos" className="app-card card--blue">
        <div className="card-top">
          <div className="card-icon">📺</div>
          <div className="card-arrow">↗</div>
        </div>
        <p className="card-name">FreeAPI: YouTube Videos Listing UI</p>
        <p className="card-desc">Some videos with freeApi, fetch and list.</p>
        <div className="card-tags">
          <span className="tag">React</span>
          <span className="tag">freeApi</span>
          <span className="tag">fetch</span>
          <span className="tag">vercel</span>
        </div>
      </Link>
      <Link to="/products" className="app-card card--coral">
        <div className="card-top">
          <div className="card-icon">🛍️</div>
          <div className="card-arrow">↗</div>
        </div>
        <p className="card-name">FreeAPI: Product Listing Interface</p>
        <p className="card-desc">Product cards with freeApi, fetch and list</p>
        <div className="card-tags">
          <span className="tag">React</span>
          <span className="tag">freeApi</span>
          <span className="tag">fetch</span>
          <span className="tag">vercel</span>
        </div>
      </Link>
      <Link to="/quotes" className="app-card card--purple">
        <div className="card-top">
          <div className="card-icon">💬</div>
          <div className="card-arrow">↗</div>
        </div>
        <p className="card-name">FreeAPI: Quotes Listing Application</p>
        <p className="card-desc">Quotes cards with freeApi, fetch and list.</p>
        <div className="card-tags">
          <span className="tag">React</span>
          <span className="tag">freeApi</span>
          <span className="tag">fetch</span>
          <span className="tag">vercel</span>
        </div>
      </Link>
      <Link to="/jokes" className="app-card card--pink">
        <div className="card-top">
          <div className="card-icon">😂</div>
          <div className="card-arrow">↗</div>
        </div>
        <p className="card-name">FreeAPI: Jokes Viewer Application</p>
        <p className="card-desc">Jokes cards with freeApi, fetch and list.</p>
        <div className="card-tags">
          <span className="tag">React</span>
          <span className="tag">freeApi</span>
          <span className="tag">fetch</span>
          <span className="tag">vercel</span>
        </div>
      </Link>
      <Link to="/cats" className="app-card card--amber">
        <div className="card-top">
          <div className="card-icon">😸</div>
          <div className="card-arrow">↗</div>
        </div>
        <p className="card-name">FreeAPI: Random Cat Viewer</p>
        <p className="card-desc">Single profile card with freeApi, fetch and list</p>
        <div className="card-tags">
          <span className="tag">React</span>
          <span className="tag">freeApi</span>
          <span className="tag">fetch</span>
          <span className="tag">vercel</span>
        </div>
      </Link>
      <Link to="/meals" className="app-card card--green">
        <div className="card-top">
          <div className="card-icon">🍽️</div>
          <div className="card-arrow">↗</div>
        </div>
        <p className="card-name">FreeAPI: Meals Listing Interface</p>
        <p className="card-desc">List of receipe cards with freeApi, fetch and list</p>
        <div className="card-tags">
          <span className="tag">React</span>
          <span className="tag">freeApi</span>
          <span className="tag">fetch</span>
          <span className="tag">vercel</span>
        </div>
      </Link>
      <Link to="/users" className="app-card card--gray">
        <div className="card-top">
          <div className="card-icon">👥</div>
          <div className="card-arrow">↗</div>
        </div>
        <p className="card-name">FreeAPI: Random Users UI</p>
        <p className="card-desc">User cards with freeApi, fetch and list</p>
        <div className="card-tags">
          <span className="tag">React</span>
          <span className="tag">freeApi</span>
          <span className="tag">fetch</span>
          <span className="tag">vercel</span>
        </div>
      </Link> 
    </div>
    </>
  );
}
