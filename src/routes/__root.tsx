import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

function toggleTheme() {
  document.body.classList.toggle('dark')
}
function checkTheme() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark')
  }
  else {
    document.body.classList.remove('dark')
  }
}
const RootLayout = () => (
  <>
    <ul className="menu">
      <li><Link to="/" className="[&.active]:font-bold">🏡 <span>Dashboard</span></Link></li>
      <li><Link to="/auth" className="[&.active]:font-bold">🔑 <span>Auth</span></Link></li>
      <li><Link to="/videos" className="[&.active]:font-bold">📺 <span>Videos</span></Link></li>
      <li><Link to="/products" className="[&.active]:font-bold">🛍️ <span>Products</span></Link></li>
      <li><Link to="/quotes" className="[&.active]:font-bold">💬 <span>Quotes</span></Link></li>
      <li><Link to="/jokes" className="[&.active]:font-bold">😂 <span>Jokes</span></Link></li>
      <li><Link to="/cats" className="[&.active]:font-bold">🐱 <span>Cats</span></Link></li>
      <li><Link to="/meals" className="[&.active]:font-bold">🍽️ <span>Meals</span></Link></li>
      <li><Link to="/users" className="[&.active]:font-bold">👥 <span>Users</span></Link></li>

    <li><button onClick={toggleTheme}>🌗 <span>Theme </span></button></li>
    </ul>
    <main>
      <Outlet />
    </main>
  </>
)

export const Route = createRootRoute({ component: RootLayout })
