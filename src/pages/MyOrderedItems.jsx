import { useEffect, useState } from "react";
import CollapsibleTable from "../components/CollapsibleTable";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const MyOrderedItems = () => {
  const { user } = useAuth();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getFoodItems();
  }, [user]);

  const getFoodItems = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/foods/${user?.email}`
    );
    setFoods(data);
  };
  console.log(foods);
  return (
    <div className="container mx-auto">
      <CollapsibleTable
        getFoodItems={getFoodItems}
        foods={foods}
      ></CollapsibleTable>
    </div>
  );
};

export default MyOrderedItems;
