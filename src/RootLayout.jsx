import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import HeroSec from "../Components/HeroSec";
import SecondAct from "../Components/SecondAct";
import ThirdAct from "../Components/ThirdAct";
import MenuOverlay from "../Components/MenuOverlay";
import CastTab from "../Components/CastTab";
import CrewTab from "../Components/CrewTab";
import Synopsis from "../Components/Synopsis";
import GalleryTab from "../Components/GalleryTab";

const RootLayout = () => {
  /* const [isMenuOpen, setIsMenuOpen] = useState(false); */
  const [currentView, setCurrentView] = useState("home");
  /* const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false); */
  const pagesWithFooter = ["cast", "crew", "synopsis", "gallery"];
  const navigateTo = (view) => {
    return setCurrentView(view);
  };
  const showFooter = pagesWithFooter.includes(currentView);
  return (
    <div className="min-h-screen flex flex-col bg-[#05060A] text-white overflow-x-hidden">
      {/* MAIN CONTENT */}
      <main className="flex-grow">
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

        {currentView === "cast" && (
          <CastTab onBack={() => navigateTo("menu")} />
        )}

        {currentView === "crew" && (
          <CrewTab onBack={() => navigateTo("menu")} />
        )}

        {currentView === "synopsis" && (
          <Synopsis onBack={() => navigateTo("menu")} />
        )}

        {currentView === "gallery" && (
          <GalleryTab onBack={() => navigateTo("menu")} />
        )}

        {currentView === "menu" && (
          <MenuOverlay
            onNavigate={navigateTo}
            onClose={() => navigateTo("home")}
          />
        )}
      </main>

      {/* FOOTER */}
      {showFooter && <ThirdAct />}
    </div>
  );
};

export default RootLayout;
