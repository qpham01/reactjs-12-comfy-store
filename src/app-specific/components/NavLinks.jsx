import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const NavLinks = ({ links }) => {
  const user = useSelector((state) => state.userState.user);

  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        if (!user && (url === 'orders' || url === 'checkout')) return null;
        return (
          <li key={id}>
            <NavLink className='capitalize' to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
