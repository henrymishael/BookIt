import BookingForm from "@/components/bookingForm";
import Heading from "@/components/heading";
import getSingleRoom from "@/app/actions/getSingleRoom";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import BackButton from "@/components/backButton";

const RoomPage = async ({ params }) => {
  const { id } = params;
  const room = await getSingleRoom(id);

  if (!room) {
    return <Heading title={"Room Not Found"} />;
  }

  const bucketID = process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ROOMS;
  const projectID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;

  const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketID}/files/${room.image}/view?project=${projectID}`;

  const imageSrc = room.image ? imageUrl : "/images/no-image.jpg";
  return (
    <>
      <Heading title={room?.name} />
      <div className='bg-white shadow rounded-lg p-6'>
        <BackButton />

        <div className='flex flex-col sm:flex-row sm:space-x-6'>
          <Image
            src={imageSrc}
            alt='Grand Conference Hall'
            className='w-full sm:w-1/3 h-64 object-cover rounded-lg'
            width={400}
            height={100}
          />

          <div className='mt-4 sm:mt-0 sm:flex-1'>
            <p className='text-gray-600 mb-4'>{room?.description}</p>

            <ul className='space-y-2'>
              <li>
                <span className='font-semibold text-gray-800'>Size:</span>{" "}
                {room.sqft} sq ft
              </li>
              <li>
                <span className='font-semibold text-gray-800'>
                  Availability:{" "}
                </span>
                {room.availability}
              </li>
              <li>
                <span className='font-semibold text-gray-800'>Price: </span>₦
                {room.price_per_hour} million
              </li>
              <li>
                <span className='font-semibold text-gray-800'>Address:</span>{" "}
                {room.address}
              </li>
            </ul>
          </div>
        </div>
        <BookingForm room={room} />
      </div>
    </>
  );
};

export default RoomPage;
