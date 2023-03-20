import Htext from "@/shared/Htext";
import { PromotionsType, SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import image1 from '@/assets/best_img1.png'
import image2 from '@/assets/best_img2.png'
import image3 from '@/assets/best_img3.png'
import image4 from '@/assets/best_img4.png'
import Best from "./Best";

const promotionObj: Array<PromotionsType> = [
  {
    image: image1,
    title: "NAIL COLORS",
  },
  {
    image: image2,
    title: "NIGHT CREAM",
  },
  {
    image: image3,
    title: "SHADES",
  },
  {
    image: image4,
    title: "LIPSTICK",
  },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Promotions = ({ setSelectedPage }: Props) => {
  return (
    <section id='promotions' className="w-full bg-primary-20 pb-20">
      <motion.div 
        onViewportEnter={() => setSelectedPage(SelectedPage.Promotions)}
      >
        <div className="w-5/6 mx-auto">
          <Htext>
            <p className="mt-[62px] text-primary-600">BEST SELLERS</p>
          </Htext>
          <div className="mt-[75px] flex justify-between gap-4 max-sm:inline-block w-full">
            {promotionObj.map((item: PromotionsType) => (
              <Best
                key={item.title}
                image={item.image}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Promotions