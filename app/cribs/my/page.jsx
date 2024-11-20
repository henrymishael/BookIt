import getMyRooms from "@/app/actions/getMyRooms";
import Heading from "@/components/heading";
import MyRoomCard from "@/components/myRoomCard";

const MyRoomsPage = async () => {
  const myRooms = await getMyRooms();

  return (
    <>
      <Heading title={"My Cribs Listings"} />
      {myRooms.length > 0 ? (
        myRooms.map((room) => <MyRoomCard key={room.$id} room={room} />)
      ) : (
        <p>You have no room listings</p>
      )}
    </>
  );
};

export default MyRoomsPage;
