import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 opacity-0 animate-fade-up">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
