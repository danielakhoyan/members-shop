import React from "react";
import { data } from "../../constant/data";
import "./MembersStyle.scss";
import { Link } from "react-router-dom";
const MembersComponent: React.FC = () => {
  return (
    <div className="wrap">
      {data.map((user) => (
        <Link to={`/members/${user.id}`} key={user.id}>
          <div className="member" key={user.phone}>
            {Object.values(user).map((itemElement, index) => (
              <div key={`${index}${itemElement}`}>{itemElement}</div>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MembersComponent;
