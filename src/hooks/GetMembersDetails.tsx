import { useParams } from "react-router-dom";
import { data } from "../constant/data";

const GetMembersDetails = () => {
  const { id } = useParams();
  const findEl = data.find((el) => (id ? el.id === +id : []));

  return findEl;
};

export default GetMembersDetails;
