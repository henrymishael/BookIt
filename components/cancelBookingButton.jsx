"use client";
import cancelBooking from "@/app/actions/cancelBooking";
import { toast } from "sonner";

const CancelBookingButton = ({ bookingId }) => {
  const handleCancelAction = async () => {
    if (!confirm("Are you sure you want to cancel this booking?")) {
      return;
    }

    try {
      const result = await cancelBooking(bookingId);

      if (result.success) {
        toast.success("Booking cancelled successfully");
      }
    } catch (error) {
      console.log("Failed to cancel booking", error);
      return {
        error: "Failed to cancel booking",
      };
    }
  };
  return (
    <button
      onClick={handleCancelAction}
      className='bg-red-500 text-white px-4 py-2 rounded w-full sm:w-auto text-center hover:bg-red-700'
    >
      Cancel Booking
    </button>
  );
};

export default CancelBookingButton;
