import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="mx-auto max-w-screen-sm p-3 space-y-3 sm:mt-3 sm:border sm:border-slate-300 sm:rounded sm:shadow">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
