import { Outlet } from 'react-router-dom';
import { Header, StoreNavbar } from '../reactjs-controls/sections';
const HomeLayout = () => {
  return (
    <>
      <Header />
      <StoreNavbar />
      <section className='align-element py-10'>
        <Outlet />
      </section>
    </>
  );
};
export default HomeLayout;
