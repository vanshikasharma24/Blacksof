import React from "react";
import Image from "next/image";
import streetLight from "../../../public/street_light_controler.png";
interface IEcosystem{
    img:any;
}
const Ecosystem: React.FC<IEcosystem>= ({img}) => {
  return (
    <div className="rounded-md border-2 border-dashed border-md border-blue-600 p-4 relative bg-gradient-to-br from-white to-light-blue-100  shadow-lg">
      <Image
        src={img}
        alt="street light"
        // layout="responsive"
        objectFit="cover"
        className="rounded-md p-3 px-5 border-[1.153px] border-solid border-blue-600 h-[60px] w-[60px]"
      />
    </div>
  );
};

export default Ecosystem;
