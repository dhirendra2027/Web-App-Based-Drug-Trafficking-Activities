import React from "react";
import LandingSection from "./LandingSection";
import NewsSection from "./NewsSection";
import InfoSection from "./InfoSection";
import NgoSection from "./NgoSection";


function LandingPage() {

  return (
    <div>
      {/* Landing Section */}
      <LandingSection />

      {/* News Section */}
      <NewsSection />

      {/* Drug Info Section */}
      <InfoSection />

      {/* Ngo Section */}
      <NgoSection />
    </div>
  );
}

export default LandingPage;
