"use client";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

const BackButton = () => {
  const router = useRouter();
  return (
    <div className='flex cursor-pointer items-center text-gray-600 hover:text-gray-800 mb-4'>
      <FaChevronLeft onClick={router.back} className='inline mr-1' />
      <span className='ml-2'>Back</span>
    </div>
  );
};

export default BackButton;
