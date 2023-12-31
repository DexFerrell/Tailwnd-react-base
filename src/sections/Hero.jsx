import { useState } from "react";
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import { shoes, statistics } from "../constants"
import ShoeCard from "../components/ShoeCard"


const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)
  return (
    <section
      id="home"
      className=" w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="mt-10 text-xl font-montserrat text-blue-500">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-extrabold">
          <span className="text-black xl:whitespace-nowrap relative z-10 pr-10 pb-0">New Arrivals</span>
          <br />
          <span className="justify-center text-blue-800">Dex</span>Kicks
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconURL = {arrowRight}/>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat)=> (
            <div key ={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe colletion'
          width={610}
          height={500}
          className='object-contain relative z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) =>(
            <div key={index}>
              <ShoeCard 
              imgURL={image} 
              changeBigShoeImage= {(shoe) => setbigShoeImg(shoe)} 
              bigShoeImg={bigShoeImg}
              />

            </div>
          ))}
          
        </div>

      </div>
    </section>
  )
}

export default Hero