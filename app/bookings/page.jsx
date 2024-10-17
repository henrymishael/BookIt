import Heading from "@/components/heading";
import getMyBookings from "../actions/getMyBookings";
import BookingRoomCard from "@/components/bookingRoomCard";

const BookingPage = async () => {
  const bookings = await getMyBookings();

  return (
    <div>
      <Heading title={"My Bookings"} />
      {bookings.length > 0 ? (
        bookings.map((booking) => (
          <BookingRoomCard key={booking.user_id} booking={booking} />
        ))
      ) : (
        <p className='text-gray-600 mt-4'>You have no bookings</p>
      )}
    </div>
  );
};

export default BookingPage;
