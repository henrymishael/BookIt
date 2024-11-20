import Image from "next/image";

const HeroSection = () => {
  return (
    <div className='relative w-full h-[58.25rem] md:h-[61.1875rem]'>
      <Image
        alt='this is the header image'
        src={"/images/headerImage.jpg"}
        layout='fill'
        className='w-full h-full object-cover'
      />
      {/* Overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-[rgba(2,40,14,0.55)] to-[rgba(2,40,14,0.55)]'></div>

      <div className='absolute inset-0 flex flex-col items-center justify-center mb-[12rem]'>
        <h1 className='font-poppins text-white text-[2rem] md:text-[4rem] font-bold'>
          Find Your Perfect Home
        </h1>
        <h4 className='font-poppins text-white font-medium md:text-[2rem]'>
          Where comfort meet convenience.
        </h4>
        <button
          // variant={"default"}
          className='mt-60 w-[50%] lg:w-[315px] h-[60px] bg-brand-button flex justify-center items-center rounded-[15px] text-[16px] font-medium font-montserrat'
        >
          View Property
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
