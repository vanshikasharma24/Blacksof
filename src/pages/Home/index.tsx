import React from "react";
import { Header, Hero, Products, Ecosystem, Connectedeco,Footer } from "@/components";
import Image from "next/image";
import background from "../../../public/background.png";
import sideImage from "../../../public/side-image.png";
import { dummyProducts } from "@/contants/constants";
import streetLight from "../../../public/street_light_controler.png";
import cloudBased from "../../../public/cloud_based.png";
import gateway from "../../../public/gateway_png.png";
import evaluation from "../../../public/evaluation_png.png";
import users from "../../../public/users_png.png";
import profitImg from "../../../public/image 41.png";
const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <section>
        <div className="mx-auto w-[70%] bg-gradient-to-br from-white via-rgba-teal-86 to-light-blue-100 py-3">
          <div className="flex-col gap-2 mt-14">
            <div className="bg-gradient-to-r  from-blue-400 to-transparent p-2 px-6 w-28 text-[#00386B] text-xl">
              Ecosystem
            </div>
            <p className="text-3xl font-inter font-medium w-[50%] py-6">
              How does a smart street light ecosystem work?
            </p>
          </div>
          <div className="flex flex-wrap gap-36">
            <div className="flex-col gap-2">
              <div className="flex gap-10 items-center">
                <Ecosystem img={streetLight} />
                <Ecosystem img={streetLight} />
              </div>
              <h2 className="mx-auto text-center py-1 mt-4 font-medium text-md">
                Street Light Controller
              </h2>
              <p className="mx-auto text-center w-60 py-2">
                Activates/deactivates in response to motion/light sensing and
                controls the brightness of the street lamp
              </p>
            </div>
            <div className="flex-col gap-2">
              <div className="flex gap-8 items-center">
                <Connectedeco img={gateway} />
              </div>
              <h2 className="mx-auto text-center py-1 mt-4 font-medium text-md">
                Gateway
              </h2>
              <p className="mx-auto text-center w-60 py-2">
                Employed for interfacing between a Controller and the Lighting
                Management Software.
              </p>
            </div>
            <div className="flex-col gap-2">
              <div className="flex gap-8 items-center">
                <Connectedeco img={cloudBased} />
              </div>
              <h2 className="mx-auto text-center py-1 mt-4 font-medium text-md">
                Cloud-based Management System
              </h2>
              <p className="mx-auto text-center w-60 py-2">
                Collects information from multiple gateways.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto w-[50%] bg-gradient-to-br from-white via-rgba-teal-86 to-light-blue-100 py-3">
          <div className="flex flex-wrap gap-36">
            <div className="flex-col gap-2 ml-10">
              <div className="flex gap-8 items-center">
                <Connectedeco img={users} />
              </div>
              <h2 className="mx-auto text-center py-1 mt-4 font-medium text-md">
                Users
              </h2>
              <p className="mx-auto text-center w-60 py-2">
                Data from the cloud is used to monitor and control street lights
                by the System Managers.
              </p>
            </div>
            <div className="flex-col gap-2">
              <div className="flex gap-8 items-center">
                <Connectedeco img={evaluation} />
              </div>
              <h2 className="mx-auto text-center py-1 mt-4 font-medium text-md">
                Evaluation
              </h2>
              <p className="mx-auto text-center w-60 py-2">
                Gathered insights are used to evaluate the performance of the
                lighting systems.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative flex-col mx-auto justify-center items-center">
          <Image
            src={background}
            alt="background"
            objectFit="cover"
            className="h-[970px]"
          />
          <div className="absolute top-24 left-56 flex-col">
            <div className="w-24 bg-gradient-to-r to-transparent from-blue-400 p-2 px-6">
              <p>Products</p>
            </div>
            <h1 className="text-3xl w-[35%]">
              <strong>Cutting-edge hardware,</strong> offerings helping cities
              optimize resources and achieve smart development goals
            </h1>

            <div className="flex gap-4 flex-wrap mt-10 mb-4 text-sm">
              {dummyProducts.map((product) => (
                <Products key={product.id} product={product.productname} />
              ))}
            </div>
            <div className="flex ">
              <Image
                src={sideImage}
                alt="background"
                // layout="responsive"
                objectFit="cover"
                className="w-[500px]"
              />
              <div className=" bg-gradient-to-b from-white to-light-blue-100 py-10  w-[500px]">
                <div className="w-[70%] ml-8 flex-col gap-3 justify-center items-center">
                  <h1 className="text-2xl  font-bold mt-[60px]">
                    Centralized Control & Monitoring System
                  </h1>
                  <p className="mt-4">
                    Designed indigenously for street lighting projects, the CCMS
                    offers a complete feeder panel for a group of 30-50 street
                    lights.
                  </p>

                  <div className="flex gap-1 mt-4">
                    <p className="text-[#3661FF] text-2xl items-center">
                      Know More
                    </p>
                    <Image
                      src={"../../../know-more.svg"}
                      alt="background"
                      width={4}
                      height={4}
                      className="w-8 h-8 items-center mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-5xl mx-auto text-4xl">
          <div className="flex flex-wrap justify-center items-center">
            <h1 className="text-4xl text-center pt-8 pb-12">
              The platform assists city managers on multiple fronts
            </h1>
          </div>

          {/* row1 */}
          <div className="grid grid-cols-4 border-b">
            <div className="col-span-2">
              <div className="flex w-full h-full p-4 border-r">
                <div className="flex flex-col w-2/3 h-full justify-center">
                  <Image
                    src={profitImg}
                    alt="profit"
                    width={4}
                    height={4}
                    className="h-20 w-20 mb-4"
                  />
                  <h2 className="text-3xl">Saves on power consumtion & related costs</h2>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex w-full h-full p-4 justify-end">
                <div className="flex flex-col w-1/3 h-full justify-center">
                  <Image
                    src={profitImg}
                    alt="profit"
                    width={4}
                    height={4}
                    className="h-20 w-20 mb-4"
                  />
                  <h2 className="text-3xl">Lowers downtimes</h2>
                </div>
              </div>
            </div>
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-4 border-b">
            <div className="col-span-1">
              <div className="flex w-full h-full p-4 border-r">
                <div className="flex flex-col h-full justify-center">
                  <Image
                    src={profitImg}
                    alt="profit"
                    width={4}
                    height={4}
                    className="h-20 w-20 mb-4"
                  />
                  <h2 className="text-3xl">Detects power thefts</h2>
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <div className="flex w-full h-full p-4 justify-end">
                <div className="flex flex-col w-3/5 h-full justify-center">
                  <Image
                    src={profitImg}
                    alt="profit"
                    width={4}
                    height={4}
                    className="h-20 w-20 mb-4"
                  />
                  <h2 className="text-3xl">
                    Ensures smart monitoring and control of the street light
                    infrastructure.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* row-3 */}
          <div className="grid grid-cols-4 border-b">
            <div className="col-span-2">
              <div className="flex w-full h-full">
                <div className="flex flex-col h-full p-4 justify-center">
                  <Image
                    src={profitImg}
                    alt="profit"
                    width={4}
                    height={4}
                    className="h-20 w-20 mb-4"
                  />
                  <h2 className="text-3xl">
                    Ensures real-time actionable analytics on power failures,
                    lamp malfunctions, voltage failures, etc.
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex w-full h-full justify-end">
                <div className="flex flex-col w-2/3 h-full pl-20 justify-center border-l">
                  <Image
                    src={profitImg}
                    alt="profit"
                    width={4}
                    height={4}
                    className="h-20 w-20 mb-4"
                  />
                  <h2 className="text-3xl">Ensures security in the neighborhood</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
      <Footer/>
      </section>
    </div>
  );
};

export default Home;
