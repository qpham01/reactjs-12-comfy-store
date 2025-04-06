import { Outlet } from 'react-router-dom';
import { Header, StoreNavbar } from '../reactjs-controls/sections';
import links from '../data/links';

const HomeLayout = () => {
  return (
    <>
      <Header />
      <StoreNavbar links={links} />
      <section className='align-element py-10'>
        <Outlet />
      </section>
    </>
  );
};
export default HomeLayout;
