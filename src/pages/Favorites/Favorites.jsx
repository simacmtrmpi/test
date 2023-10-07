// import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import PhonesCard from "../../components/Phones/PhonesCard";
import useGetPhones from "../../hooks/useGetPhones";
import { getLocalStorageData, saveToLocalStorage } from "../../utility/LocalStorage";
import Swal from "sweetalert2";
import FavoritesCard from "./FavoritesCard";

const Favorites = () => {
  const [phones] = useGetPhones();
  const [favoritePhones, setFavoritePhones] = useState([]);
  const [noData, setNoData] = useState("");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const storedFavorites = getLocalStorageData();
    const filteredPhones = phones?.filter((phone) =>
      storedFavorites.includes(phone.id)
    );
    if (filteredPhones) {
      setFavoritePhones(filteredPhones);
    }
  }, [phones]);

  const handleRemove = ()=>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear()
            setFavoritePhones([])
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })

  }

  return (
    <div className="flex flex-col items-center justify-center">
        <button onClick={handleRemove} className="bg-red-400 px-4 py-2 rounded text-white font-bold mt-5">Remove All</button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {showAll
          ? favoritePhones?.map((phone) => (
              <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
            ))
          : favoritePhones
              ?.slice(0, 3)
              .map((phone) => (
                <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
              ))}
      </div>
      
      {favoritePhones.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="btn bg-sky-400 px-4 py-2 rounded text-white font-bold mb-5">
          {showAll ? "Show less" : "Show All"}
        </button>
      )}
    </div>
  );
};

export default Favorites;
