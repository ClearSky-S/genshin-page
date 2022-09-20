import { Outlet, Link } from "react-router-dom";
export default function Root() {
  return (
    <>
      <nav id="rootNav" class="navbar sticky-top navbar-light">
        <div class="container-fluid">
        <Link to={`/`} className="navbar-brand">Genshin Info</Link>
          <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
              <Link to={`characters`} className="nav-item nav-link">characters</Link>
              <Link to={`elements/1`} className="nav-item nav-link">elements</Link>
              <Link to={`nations/1`} className="nav-item nav-link">nations</Link>
              <Link to={`weapons/1`} className="nav-item nav-link">weapons</Link>
            </div>
            <div class="navbar-nav ms-auto">
              {/* <a href="#" class="nav-item nav-link">Login</a> */}
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}