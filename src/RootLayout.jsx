import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import HeroSec from "../Components/HeroSec";
import SecondAct from "../Components/SecondAct";
import ThirdAct from "../Components/ThirdAct";
import MenuOverlay from "../Components/MenuOverlay";

const RootLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <div>
      <Navbar openMenu={openMenu} />
      <HeroSec />
      <SecondAct />
      <ThirdAct />
      <MenuOverlay isOpen={isMenuOpen} onClose={closeMenu} />
    </div>
  );
};

export default RootLayout;
