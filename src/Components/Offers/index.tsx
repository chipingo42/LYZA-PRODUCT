import Htext from "@/shared/Htext";
import { OffersType, SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import Deals from "./Deals";

const offersPropsObj: Array<OffersType> = [
  {
    icon: <svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3 10.9356L10.1429 18.5911L25.8632 3" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: "10% OFF at FIRST orders !",
    code: "CODE : FIRST",
  },
  {
    icon: <svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3 10.9356L10.1429 18.5911L25.8632 3" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: "15% OFF on orders above Rs.1000 !",
    code: "CODE : LYZA1000",
  },
  {
    icon: <svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3 10.9356L10.1429 18.5911L25.8632 3" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: "25% OFF on orders  above RS.2000 !", 
    code: "CODE : LYZA2000",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Offers = ({ setSelectedPage }: Props) => {
  return (
    <section id="offers" className="bg-secondary-700 pb-20 w-full">
      <motion.div 
        onViewportEnter={() =>  setSelectedPage(SelectedPage.Offers)}
      >
        <div className="mx-auto w-5/6">
          <Htext>
            <p className="mt-[43px] text-primary-150">DEALS OF THE DAY</p>
          </Htext>
          <div className="mt-[78px] flex justify-between w-full max-sm:block max-sm:mt-[50px]">
            {offersPropsObj.map((item: OffersType) => (
              <Deals
                key={item.title}
                icon={item.icon}
                title={item.title}
                code={item.code}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Offers;

