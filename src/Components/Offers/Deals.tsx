type Props = {
  icon: JSX.Element,
  title: string,
  code: string,
}

const Deals = ({ icon, title, code }: Props) => {
  return (
    <div>
      <div className="bg-secondary-400 rounded-full w-[300px] h-[116px] flex flex-col justify-center max-md:w-full ">
        <div className="flex items-center justify-center gap-2">
          <div className="px-2 py-3 bg-secondary-50 rounded-full md:flex justify-center items-center max-md:px-2 max-md:py2">{icon}</div>
          <p className="text-primary-20 font-Recursive font-bold text-md basis-3/4 max-md:text-sm max-sm:text-xs">{title}</p>
        </div>
      </div> 
      <p className="flex items-center justify-center font-Recursive font-bold text-md text-primary-400 mt-[14px]">{code}</p>
    </div>
  )
}

export default Deals;





