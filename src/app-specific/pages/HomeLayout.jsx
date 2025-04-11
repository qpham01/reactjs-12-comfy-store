import { Outlet, useNavigation } from 'react-router-dom';
import { Loading } from '../components';
import { Header, StoreNavbar } from '../../reusable/sections';
import links from '../data/links';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <>
      <Header />
      <StoreNavbar links={links} />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className='align-element py-10'>
          <Outlet />
        </section>
      )}
    </>
  );
};
export default HomeLayout;
