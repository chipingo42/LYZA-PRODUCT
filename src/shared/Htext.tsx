type Props = {
  children: React.ReactNode;
}

const Htext = ({children}: Props) => {
  return (
    <h1 className="flex items-center justify-center font-Recursive font-bold text-lg max-xs:text-md ">{children}</h1>
  )
}

export default Htext

