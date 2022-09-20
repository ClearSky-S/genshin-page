import { Outlet, Link } from "react-router-dom";
export default function Root() {
  return (
    <>
      <h1><Link to={`/`}>Genshin Info</Link></h1>

      <nav>
        <ul> 
          <li><Link to={`characters`}>characters</Link></li>
          <li><Link to={`elements/1`}>elements</Link></li>
          <li><Link to={`nations/1`}>nations</Link></li>
          <li><Link to={`weapons/1`}>weapons</Link></li>
        </ul>
      </nav>
        
      <Outlet />
    </>
  );
}