import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getSectionColor } from "../constants/sectionColors";

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
  const sectionColor = getSectionColor(location.pathname);

  return (
    <div className="relative min-h-screen">
      {/* Global architectural axis - signature element */}

      {/* Navigation */}
      <Navbar sectionColor={sectionColor} />

      {/* Main content area */}
      <main className="relative">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer sectionColor={sectionColor} />
    </div>
  );
};

export default MainLayout;
