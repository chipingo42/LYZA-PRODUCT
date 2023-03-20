import Htext from "@/shared/Htext";
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import image1 from '@/assets/product1.png'
import image2 from '@/assets/product2.png'
import image3 from '@/assets/product3.png'


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Brands = ({ setSelectedPage }: Props) => {
  return (
    <section id="brands" className="w-full">
      <motion.div
       onViewportEnter={() => setSelectedPage(SelectedPage.Brands)}
      >
        <div className="pb-20 mx-auto w-5/6">
          <Htext>
            <p className="mt-[70px] text-primary-700">OUR PRODUCTS</p>
          </Htext>
          <div className="md:flex mt-[129px] flex-wrap justify-between gap-3 overflow-hidden max-sm:mt-[60px]">
            <div className="flex flex-col max-sm:w-full">
              <img src={image1} alt="product-image" className="w-[330px] max-md:w-full" />
              <p className=" font-Recursive mt-[24px] font-bold text-md text-primary-300 flex items-center justify-center">NIGHT CREAMS</p>
            </div>
            <div className="flex flex-col max-sm:w-full">
              <img src={image2} alt="product-image" className="w-[330px] max-md:w-full" />
              <p className=" font-Recursive mt-[24px] font-bold text-md text-primary-300 flex items-center justify-center">SUN SCREENS</p>
            </div>
            <div className="flex flex-col max-sm:w-full">
              <img src={image3} alt="product-image" className="w-[330px] max-md:w-full" />
              <p className=" font-Recursive mt-[24px] font-bold text-md text-primary-300 flex items-center justify-center">MOISTURIZERS</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Brands