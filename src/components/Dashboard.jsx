import React, { useState } from "react";
import brownShoe from "./../../src/images/shoe-brown.svg";
import roundShoe from "./../../src/images/round-shoe.svg";
import star from './../../src/images/Star.svg'
import arrowup from './../../src/images/arrowup.svg'
import arrowdown from './../../src/images/arrowdown.svg'
import { productData } from "./productData";
import { Chart } from "./Chart";

const Dashboard = () => {
    const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="lg:p-24">
      <div className="border-[#EFEFEF] p-6 border rounded-3xl ">
        <img src={brownShoe} alt="banner" />
        <div className="relative bottom-8 left-6 md:bottom-16 xl:bottom-24 xl:left-20">
          <img src={roundShoe} alt="shoe" className="absolute w-20 h-20 md:w-[168px] md:h-[168px]" />
        </div>
        <div className="flex flex-col lg:flex-row px-2 md:px-8 lg:px-2 xl:px-24 justify-between w-full mt-12 md:mt-24">
        <div className=" lg:w-1/2 xl:w-3/4 mb-10 ">
          <h2 className=" text-[40px] leading-10 text-[#292929] ">Adam-son Store</h2>
          <p className=" text-sm text-[#292929] leading-4 font-normal">
            Another way to improve the readability of a website or app is to use
            clear and concise navigation. This helps to make it easy for you to
            find the information or features that you are looking for. It also
            helps to prevent you from becoming lost or overwhelmed.
          </p>
        </div>
        <div className="flex flex-row self-center justify-center w-full  lg:w-2/5">
        <div>
         <button  id="btn" className="px-6 py-3 border border-[#8113DD] rounded-[99px] mb-3 md:mb-0 mr-2 text-[#292929] font-medium text-sm">Edit storefront</button>
         </div>
          <div>
          <button id="btn" className="px-6 py-3 bg-[#8113DD] rounded-[99px]  text-[#ffffff] font-medium text-sm">Add product</button>
          </div>
         
        </div>
      </div>
      </div>
     
      <div className="py-6 px-6 lg:px-0 ">
        <h1 className="text-base font-bold leading-5 mb-4">Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            <div className="border-[#EFEFEF] p-6 border rounded-lg">
               <div className="flex justify-between mb-3">
                  <img src={star} alt="start" />
                  <div className="bg-[#CFFE98] flex rounded-[99px] text-xs font-medium px-2 py-1">
                    <img src={arrowup} alt="arrow" />
                    <p className="text-[#292929] font-medium text-xs">56.5%</p>
                  </div>
               </div>
               <p className="text-base font-medium leading-5">Total Sales</p>
               <p className="text-[40px] font-medium leading-10">₦134,000</p>
            </div>
            <div className="border-[#EFEFEF] p-6 border rounded-lg">
               <div className="flex justify-between mb-3">
                  <img src={star} alt="start" />
                  <div className="bg-[#CFFE98] flex rounded-[99px] text-xs font-medium px-2 py-1">
                    <img src={arrowup} alt="arrow" />
                    <p className="text-[#292929] font-medium text-xs">56.5%</p>
                  </div>
               </div>
               <p className="text-base font-medium leading-5">Total Orders</p>
               <p className="text-[40px] font-medium leading-10">120</p>
            </div>
            <div className="border-[#EFEFEF] p-6 border rounded-lg">
               <div className="flex justify-between mb-3">
                  <img src={star} alt="start" />
                  <div className="bg-[#FFCCA7] flex rounded-[99px] text-xs font-medium px-2 py-1">
                    <img src={arrowdown} alt="arrow" />
                    <p className="text-[#450B05] font-medium text-xs">56.5%</p>
                  </div>
               </div>
               <p className="text-base font-medium leading-5">Total Visitors</p>
               <p className="text-[40px] font-medium leading-10">54</p>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 px-6 lg:px-0">
      <div className="border-[#EFEFEF] p-6 border rounded-lg overflow-auto">
      <div>
            <h1 className="text-[#292929] text-base font-medium ">Real-Time Sales</h1>
            <div className="text-[#989898] text-xs font-medium flex flex-col lg:flex-row justify-between mb-3">
                <p className="mb-3 lg:mb-0">Here are the monthly sales stats</p>
                <div className="flex">
                    <div className="flex">
                        <div className="w-5 h-5 bg-[#E9D1FF] rounded-full mr-1"></div>
                        <p className="">Order</p>
                    </div>
                    <div className="flex">
                        <div className="w-5 h-5 bg-[#A946FF] rounded-full ml-2 mr-1"></div>
                        <p className="">Revenue</p>
                    </div>
                </div>
            </div>
        </div>
               <Chart/>
            </div>
      <div className="border-[#EFEFEF] p-6 border rounded-lg">
        <div>
            <h1 className="text-[#292929] text-base font-medium ">Top Products</h1>
            <div className="text-[#989898] text-xs font-medium flex justify-between mb-3">
                <p>Here are the most recent financial transaction</p>
                <p onClick={()=>setIsVisible(!isVisible)}>{isVisible ? "View less" :"View all"}</p>
            </div>
        </div>
          {isVisible ? (
            <>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 ">
             {productData.map((product,index) =>(
                <div key={index} >
                   <img src={product.productimg} alt="product"  className="mb-3 "/>
                   <p className="text-[#989898] font-medium text-xs ">{product.increase}% increase</p>
                   
                </div>
))}
          </div>
            </>
          ) :(
            <>
            <div className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 justify-center">
          {productData.slice(0,4).map((product,index) =>(
                <div key={index}>
                   <img src={product.productimg} alt="product" className="mb-3"/>
                   <p className="text-[#989898] font-medium text-xs ">{product.increase}% increase</p>
                   
                </div>
))}
          </div>
            </>
          )}
            </div>
      </div>

      <div className="p-6">
      <div className="border-[#EFEFEF] p-6 border rounded-lg overflow-auto">
      <div>
            <h1 className="text-[#292929] text-base font-medium ">Recent Orders</h1>
            <div className="text-[#989898] text-xs font-medium  mb-3">
                <p>Here are the most recent financial transaction</p>
                
            </div>
        </div>
        <div >
            <table className=" table border-collapse border-spacing-32 w-full border border-[#EFEFEF] rounded-tl-lg rounded-tr-lg">
               <thead className="bg-[#3D006C] text-white rounded-tl-lg rounded-tr-lg ">
                 <tr className="text-justify  ">
                    <th className="pl-5 py-3 rounded-tl-lg ">Product Name</th>
                    <th className="pl-5">Order number</th>
                    <th className="pl-5">Date</th>
                    <th className="pl-5">Price</th>
                    <th className="pl-5 rounded-tr-lg">Status</th>
                 </tr>
               </thead>
               <tbody className="text-[#989898] text-sm font-normal">
                <tr className="border border-b">
                    <td className="flex py-5">
                        <div className="w-10 h-10 bg-[#A946FF] rounded-full mx-5"></div>
                        <div>
                            <p>Product Name</p>
                            <p>Product description</p>
                        </div>
                    </td>
                    <td>#1234567</td>
                    <td>12 - April - 2023</td>
                    <td>N10,000</td>
                    <td className="flex justify-center  mb-8 mr-5  bg-[#CFFE98] rounded-[99px] px-3 py-1 text-sm text-[#153003] font-medium text-center"><p className="self-center">Completed</p></td>
                </tr>
                <tr className="py-5">
                    <td className="flex py-5">
                        <div className="w-10 h-10 bg-[#A946FF] rounded-full mx-5"></div>
                        <div>
                            <p>Product Name</p>
                            <p>Product description</p>
                        </div>
                    </td>
                    <td>#1234567</td>
                    <td>12 - April - 2023</td>
                    <td>N10,000</td>
                    <td className=" flex justify-center mb-8 mr-5 self-center bg-[#F1FFC8] rounded-[99px] px-4 py-1 text-sm text-[#1D3102] font-medium text-center">Pending</td>
                </tr>
                
               </tbody>
            </table>
        </div>
            </div>
      </div>
    </div>
  );
};

export default Dashboard;
