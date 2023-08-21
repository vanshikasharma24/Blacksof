import React from "react";
import Image from "next/image";

interface IEcosystem{
    img:any;
}
const Connectedeco: React.FC<IEcosystem>= ({img}) => {
  return (
    <div className="rounded-md border-2 border-dashed border-md border-[#D3D3D3] p-4 relative bg-gradient-to-br from-white to-light-blue-100  shadow-lg mx-auto">
      <Image
        src={img}
        alt="street light"
        // layout="responsive"
        objectFit="cover"
        className="rounded-md p-3 px-5 border-[1.153px] border-solid border-[#EAEAEA] h-[70px] w-[70px]"
      />
    </div>
  );
};

export default Connectedeco;
