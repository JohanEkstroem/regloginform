import { Outlet, NavLink } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <div
        style={{
          backgroundColor: '#212529',
        }}
      >
        <h1
          style={{
            marginLeft: '2vw',
            color: 'white',
          }}
        >
          Kino2punktnoll
        </h1>
        <p
          style={{
            marginTop: '-25px',
            marginLeft: '2vw',
            color: 'white',
          }}
        >
          En tagline
        </p>
        <nav
          className="navbar"
          style={{
            display: 'flex',
            paddingBottom: '1rem',
            justifyContent: 'space-around',
          }}
        >
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? 'navLinkActive' : 'navLink'
            }
          >
            Hem
          </NavLink>
          <NavLink
            to="/filmer"
            className={({ isActive }) =>
              isActive ? 'navLinkActive' : 'navLink'
            }
          >
            Filmer
          </NavLink>
          <NavLink
            to="/mypages"
            className={({ isActive }) =>
              isActive ? 'navLinkActive' : 'navLink'
            }
          >
            Mina Sidor
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? 'navLinkActive' : 'navLink'
            }
          >
            Logga in
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? 'navLinkActive' : 'navLink'
            }
          >
            Registrera
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

/* <NavLink className={({ isActive }) => (isActive ? 'red' : 'blue')} />; */
