import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
