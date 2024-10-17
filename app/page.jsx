import RoomCard from "@/components/roomCard";
import Heading from "@/components/heading";
import getAllRooms from "./actions/getAllRooms";
export default async function Home() {
  const rooms = await getAllRooms();
  return (
    <>
      <Heading title={"Available Rooms"} />
      {rooms.length > 0 ? (
        rooms.map((room) => <RoomCard key={room?.$id} room={room} />)
      ) : (
        <p>No rooms available at the moment</p>
      )}
    </>
  );
}
