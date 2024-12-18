"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import { FaUser, FaSignInAlt, FaSignOutAlt, FaBuilding } from "react-icons/fa";
import destroySession from "@/app/actions/destroySession";
import { toast } from "sonner";

import { useAuth } from "@/context/authContext";

const Header = () => {
  const router = useRouter();

  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const handleLogOut = async () => {
    const { success, error } = await destroySession();

    if (success) {
      setIsAuthenticated(false);
      router.push("/login");
    } else {
      toast.error(error);
    }
  };
  return (
    <>
      <header className='bg-gray-100'>
        <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <div className='flex items-center'>
              <Link href='/'>
                <Image
                  className='h-16 w-16'
                  src={logo}
                  alt='Book-it'
                  priority={true}
                />
              </Link>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4'>
                  {/* <!-- Logged In Only --> */}
                  {isAuthenticated && (
                    <>
                      <Link
                        href='/'
                        className='rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white'
                      >
                        Cribs
                      </Link>
                      <Link
                        href='/bookings'
                        className='rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white'
                      >
                        Bookings
                      </Link>
                      <Link
                        href='/cribs/add'
                        className='rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white'
                      >
                        Add Crib
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
            {/* <!-- Right Side Menu --> */}
            <div className='ml-auto'>
              <div className='ml-4 flex items-center md:ml-6'>
                {/* <!-- Logged Out Only --> */}
                {!isAuthenticated && (
                  <>
                    <Link
                      href='/login'
                      className='mr-3 text-gray-800 hover:text-gray-600'
                    >
                      <FaSignInAlt className='inline mr-1' /> Login
                    </Link>
                    <Link
                      href='/register'
                      className='mr-3 text-gray-800 hover:text-gray-600'
                    >
                      <FaUser className='inline mr-1' /> Register
                    </Link>
                  </>
                )}

                {isAuthenticated && (
                  <>
                    <Link href='/cribs/my'>
                      <FaBuilding className='inline mr-1' /> My Cribs
                    </Link>
                    <button
                      onClick={handleLogOut}
                      className='mx-3 text-gray-800 hover:text-gray-600'
                    >
                      <FaSignOutAlt className='inline mr-1' /> Sign Out
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>

        {/* <!-- Mobile menu --> */}
        <div className='md:hidden'>
          <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
            {/* <!-- Logged In Only --> */}
            {isAuthenticated && (
              <>
                <Link
                  href='/'
                  className='block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white'
                >
                  Cribs
                </Link>
                <Link
                  href='/bookings'
                  className='block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white'
                >
                  Bookings
                </Link>
                <Link
                  href='/cribs/add'
                  className='block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white'
                >
                  Add Crib
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
