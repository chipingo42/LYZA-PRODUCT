import Navbar from "@/Components/Navbar"
import Home from "@/Components/Home"
import Brands from "@/Components/Brands"
import Offers from "@/Components/Offers"
import Promotions from "@/Components/Promotions"
import Contactus from "@/Components/Contactus"
import Footer from "@/Components/Footer"
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types"




function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="app">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Brands setSelectedPage={setSelectedPage} />
      <Offers setSelectedPage={setSelectedPage} />
      <Promotions setSelectedPage={setSelectedPage} />
      <Contactus setSelectedPage={setSelectedPage}  />
      <Footer setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
