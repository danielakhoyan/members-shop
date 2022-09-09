import { useNavigate } from "react-router-dom";
import GetMembersDetails from "../hooks/GetMembersDetails";
const MembersDetails = () => {
  const navigate = useNavigate();
  const getMember = GetMembersDetails();
  const goBack = () => navigate(-1);
  return (
    <>
      <div className="wrap">
        <div className="member">
          {getMember?.name}
          {getMember?.address}
          {getMember?.email}
          <button onClick={goBack} className="btn">
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default MembersDetails;
