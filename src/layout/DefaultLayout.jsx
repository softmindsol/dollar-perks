import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className='container max-w-screen-lg mx-auto min-h-screen'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
