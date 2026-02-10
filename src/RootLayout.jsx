import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import HeroSec from "../Components/HeroSec";
import SecondAct from "../Components/SecondAct";
import ThirdAct from "../Components/ThirdAct";
import MenuOverlay from "../Components/MenuOverlay";
import CastTab from "../Components/CastTab";
import CrewTab from "../Components/CrewTab";
import Synopsis from "../Components/Synopsis";

const RootLayout = () => {
  /* const [isMenuOpen, setIsMenuOpen] = useState(false); */
  const [currentView, setCurrentView] = useState("home");
  /* const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false); */

  const navigateTo = (view) => {
    return setCurrentView(view);
  };
  return (
    <div>
      {currentView === "home" && (
        <Navbar onMenuClick={() => navigateTo("menu")} />
      )}

      {currentView === "home" && (
        <>
          <HeroSec />
          <SecondAct />
          <ThirdAct />
        </>
      )}
      {currentView === "cast" && <CastTab onBack={() => navigateTo("menu")} />}
      {currentView === "crew" && <CrewTab onBack={() => navigateTo("menu")} />}
      {currentView === "synopsis" && (
        <Synopsis onBack={() => navigateTo("menu")} />
      )}
      {currentView === "menu" && (
        <MenuOverlay
          onNavigate={navigateTo}
          onClose={() => navigateTo("home")}
        />
      )}
    </div>
  );
};

export default RootLayout;
