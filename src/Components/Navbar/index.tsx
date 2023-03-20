import image from '@/assets/lyza.png'
import Link from './links';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { SelectedPage } from "@/shared/types";
import ActionButton from '@/shared/ActionButton';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useState } from 'react';


type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {

  const flexBetween = "flex items-center justify-between";
  const navbarBackground = isTopOfPage ? "" : "bg-secondary-400 text-primary-20 drop-shadow";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const linkClass = `text-sm font-semibold font-Recursive`;

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-[21px]`}>
        <div className={`${flexBetween} mx-auto w-5/6`}> 
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={image} alt="logo" className='w-[120px]' />
            {isAboveMediumScreens ? ( 
              <div className={`${flexBetween} w-full`}>
                <ul className={`${flexBetween} gap-8`}>
                  <li className={linkClass}>
                    <Link
                      page='Home' 
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />  
                  </li>
                  <li className={linkClass}>
                    <Link
                      page='Brands' 
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </li>
                  <li className={linkClass}>
                    <Link
                      page='Offers' 
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </li>
                  <li className={linkClass}>
                    <Link
                      page='Promotions' 
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    /> 
                  </li>
                  <li className={linkClass}>
                    <Link
                      page='About Us' 
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </li>
                </ul>
                {/* BUTTON */}
                <ActionButton setSelectedPage={setSelectedPage}>
                  Contact us
                </ActionButton>
              </div>) : ( 
              <button className="rounded-full bg-secondary-500 p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className='fixed bottom-0 z-40 right-0 h-full text-primary-20 w-[300px] bg-secondary-400 drop-shadow-xl'>
          {/* CLOSE ICON */}
          <div className='flex justify-end p-12'>
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className='h-6 w-6 text-primary-20' />
            </button>
          </div>
          {/* MENI ITEMS */}
          <ul className="ml-[33%] flex flex-col gap-10 text-2xl">
            <li className={linkClass}>
              <Link
                page='Home' 
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />  
            </li>
            <li className={linkClass}>
              <Link
                page='Brands' 
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </li>
            <li className={linkClass}>
              <Link
                page='Offers' 
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </li>
            <li className={linkClass}>
              <Link
                page='Promotions' 
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              /> 
            </li>
            <li className={linkClass}>
              <Link
                page='About Us' 
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
export default Navbar;