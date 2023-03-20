import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const index = ({ setSelectedPage }: Props) => {
  return (
    <footer className="bg-secondary-400 w-full py-20 text-primary-20" id="aboutus">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)} className="mx-auto justify-between w-5/6 gap-16 md:flex">
        <div className="mt-10 basis-1/3">
          <h1 className="font-Recursive font-normal text-xs ">We have better quality produtcs! <br /> <span className=" mx-8">For more info join us !</span></h1>
          <form className="mt-[48px] relative">
            <label htmlFor="email">
              <input type="email" placeholder="Enter your email address" className=" relative top-0 left-0 px-4 py-4 bg-inherit border border-solid border-primary-20 rounded-full w-full font-Recursive font-semibold text-[15px]  "  />
            </label>
            <button className="absolute right-2 mt-[7px] px-5 py-2 font-Recursive font-semibold text-xs bg-primary-20 rounded-full text-primary-100 hover:bg-secondary-600 hover:text-primary-20 transition duration-500">Join now</button>
          </form>
        </div>
        <div className="basis-1/4 max-md:mt-16">
          <h1 className=" font-Recursive font-bold text-md">PRODUCTS</h1>
          <p className=" font-Recursive font-semibold text-sm my-5">SUN SCREENS</p>
          <p className=" font-Recursive font-semibold text-sm my-5">MOISTURIZERS</p>
          <p className=" font-Recursive font-semibold text-sm my-5">NIGHT CREAMS</p>
          <p className=" font-Recursive font-semibold text-sm my-5">BEAUTY PRODUCTS</p>
        </div>
        <div className="basis-1/4 max-md:mt-16">
          <h1 className=" font-Recursive font-bold text-md">HELPFUL LINKS</h1>
          <p className=" font-Recursive font-semibold text-sm my-5">lyzabeautyproducts.com</p>
          <p className=" font-Recursive font-semibold text-sm my-5">lyza app</p>
          <p className=" font-Recursive font-semibold text-sm my-5">Blog</p>
        </div>
      </motion.div>
    </footer>
  )
}

export default index