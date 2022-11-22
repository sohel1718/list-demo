import Footer from '../Footer';
import Header from '../Header';

const BaseLayout = ({ children, title, handleNavigate }) => {
  return (
    <div className='base-layout'>
      <Header />
        <div className='base-layout_content'>
            <div className='base-layout_content_banner'>
                <h1>{title}</h1>
            </div>  
            <div className='base-layout_content_wrapper'>
                {children}
            </div>
        </div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
