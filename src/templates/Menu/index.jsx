import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        height: '50px',
        alignItems: 'center',
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/abc">ABC</Link>
    </nav>
  );
};
