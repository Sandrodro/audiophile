import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
