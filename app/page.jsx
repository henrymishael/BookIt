import RoomCard from "@/components/roomCard";
import Heading from "@/components/heading";
import HeroSection from "@/components/HeroSection";
import ListingSection from "@/components/ListingSection";
import getAllRooms from "./actions/getAllRooms";
import Image from "next/image";
export default async function Home() {
  const rooms = await getAllRooms();
  return (
    <>
      <HeroSection />
      <main className='min-h-screen font-montserrat container'>
        <h1 className='text-center  m-5 font-inter text-[1.3125rem] md:text-[2.625rem] font-bold'>
          Our Services
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
          <div className='bg-white rounded-lg p-4 flex flex-col items-center border border-[rgba(20,20,20,0.21)] shadow-custom text-[#141414]'>
            <Image
              alt='Image describing buy a house'
              src='/images/Buy.png'
              width={231}
              height={174}
            />
            <h3 className='text-[1.3rem] font-semibold mt-3 '>Buy House</h3>
            <p className='text-center font-medium mt-2'>
              Buy your dream home here at Find my crib, where you get an
              affordable and comfortable space that satisfy your needs.
            </p>
          </div>
          <div className='bg-white rounded-lg p-4 flex flex-col items-center border border-[rgba(20,20,20,0.21)] shadow-custom text-[#141414]'>
            <Image
              alt='Image describing rent a house'
              src='/images/Rent.png'
              width={231}
              height={174}
            />
            <h3 className='text-[1.3rem] font-semibold mt-3'>Rent House</h3>
            <p className='text-center font-medium mt-2'>
              Rent your dream home here at Find my crib, where you get an
              affordable and comfortable space that satisfy your needs.
            </p>
          </div>
          <div className='bg-white rounded-lg p-4 flex flex-col items-center border border-[rgba(20,20,20,0.21)] shadow-custom text-[#141414]'>
            <Image
              alt='Image describing rent a house'
              src='/images/Sell.png'
              width={231}
              height={174}
            />
            <h3 className='text-[1.3rem] font-semibold mt-3'>Sell House</h3>
            <p className='text-center font-medium mt-2'>
              Sell your house/ property here at Find my crib, without hassle and
              stress
            </p>
          </div>
          <div className='bg-white rounded-lg p-4 flex flex-col items-center border border-[rgba(20,20,20,0.21)] shadow-custom text-[#141414]'>
            <Image
              alt='Image describing rent a house'
              src='/images/Flat.png'
              width={231}
              height={174}
            />
            <h3 className='text-[1.3rem] font-semibold mt-3'>
              Flats And Buildings
            </h3>
            <p className='text-center font-medium mt-2'>
              Get different types of property here at Find my Crib
            </p>
          </div>
          <div className='bg-white rounded-lg p-4 flex flex-col items-center border border-[rgba(20,20,20,0.21)] shadow-custom text-[#141414]'>
            <Image
              alt='Image describing rent a house'
              src='/images/Mall.png'
              width={231}
              height={174}
            />
            <h3 className='text-[1.3rem] font-semibold mt-3'>
              Shops And Malls
            </h3>
            <p className='text-center font-medium mt-2'>
              Sell and buy/rent your shops and malls here at Find my crib with
              ease and comfort.
            </p>
          </div>
          <div className='bg-white rounded-lg p-4 flex flex-col items-center border border-[rgba(20,20,20,0.21)] shadow-custom text-[#141414]'>
            <Image
              alt='Image describing rent a house'
              src='/images/Customer.png'
              width={231}
              height={174}
            />
            <h3 className='text-[1.3rem] font-semibold mt-3'>24/7 Service</h3>
            <p className='text-center font-medium mt-2'>
              Connect with us anytime, we are always at your service to provide
              you with the best.
            </p>
          </div>
        </div>
        {/*} <ListingSection /> */}

        <Heading title={"Available Properties"} />
        {rooms.length > 0 ? (
          rooms.map((room) => <RoomCard key={room?.$id} room={room} />)
        ) : (
          <p>No rooms available at the moment</p>
        )}
      </main>
    </>
  );
}
