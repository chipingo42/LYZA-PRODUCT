type Props = {
  image: string,
  title: string,
}

const Best = ({image, title}: Props) => {
  return (
    <div className="flex flex-col justify-center ">
      <img src={image} alt={image} />
      <p className="flex items-center justify-center text-primary-400 font-Recursive font-bold text-md max-sm:text-sm">{title}</p>
    </div>
  )
}

export default Best;

