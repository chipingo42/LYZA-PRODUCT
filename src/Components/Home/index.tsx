import { SelectedPage } from "@/shared/types"
import { motion } from 'framer-motion'
import AnchorLink from "react-anchor-link-smooth-scroll";
import img from '@/assets/lyza_image.png'



type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="w-full bg-secondary-500 pb-10 mt-[4.7rem]">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div 
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="md:flex mx-auto w-5/6"
      >
        <div className="mt-[101px] md:basis-2/4">
          <div>
            <h1 className=" font-Recursive text-xl font-semibold leading-[97.5px] text-primary-600 max-md:pt-9 max-sm:text-md max-sm:leading-[30px]">LYZA BEAUTY <br /> PRODUCTS</h1>
            <p className="mt-[70px] text-xs font-Recursive font-semibold max-lg:mt-[20px]">LYZA beauty products adopts a strong cultural and <br /> ethical approach to business</p>
          </div>
          <div className="mt-[155px] max-md:mt-[60px] max-lg:my-10 max-sm:mt-[70px]">
            <AnchorLink 
              className=" bg-secondary-400 px-8 py-2 rounded-full font-Recursive font-semibold text-sm text-primary-20 hover:bg-secondary-600 transition duration-500"
              onClick={() => setSelectedPage(SelectedPage.Brands)}
              href={`#${SelectedPage.Brands}`}
            >
             BRANDS
            </AnchorLink>
          </div>
        </div>
        <div className="flex basis-2/4 justify-center max-md:mt-16 md:justify-items-end ">
          <img src={img} alt="home-text-image" className="h-[620px] md:mt-[99px] max-md:w-full max-xs:h-[300px]" />
        </div>
      </motion.div>
    </section>
  )
}

export default Home;