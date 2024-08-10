
import Image from "next/image";
interface Props{
    title: string;
    value: string;
    icon: string;

}

const AboutTile = ({title, value, icon}: Props) => {
  return (
    <div className="flex mb-2">
        <img src={icon} alt="icon" />
        {/* <Image src={icon} alt="icon" width={50} height={50}/> */}
        <link type="image/png" sizes="16x16" rel="icon" href=".../icons8-add-16.png"></link>
        <div className="flex flex-col ml-4">
          <p>{title}</p>
          <p className="font-bold">{value}</p>
        </div>

    </div>
  )
}

export default AboutTile