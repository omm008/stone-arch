import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/*
  MAIN LAYOUT:
  - Wraps all pages
  - Includes Navbar, GlobalAxis, and Footer
  - Provides consistent structure
  - Detects current section and passes color context
  
  COLOR ADDENDUM:
  - Determines section color based on route
  - Passes to GlobalAxis, Navbar, and Footer
*/

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen">
      {/* Global architectural axis - signature element */}

      {/* Navigation */}
      <Navbar />

      {/* Main content area */}
      <main className="relative">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
