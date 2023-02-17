import { useEffect, useState } from "react";
import axios from "axios";
import { resReqApi } from "../api/reqRes";
import { IReqResUserApi, Users } from "../interfaces/reqResApi";

export const User = () => {
  const [data, setData] = useState<Users[]>([]);

  useEffect(() => {
    resReqApi
      .get<IReqResUserApi>("/users")
      .then((resp) => {
        setData(resp.data.data);
        console.log(resp.data.data);
      })
      .catch(console.log);
  }, []);

  return (
    <>
      <h3>Users</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>

            <th>Avatar</th>
            <th>Name</th>
            <th>LastName</th>

            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row: Users) => (
            <tr key={row.id.toString()}>
              <td>{row.id}</td>

              <td><img src={ row.avatar} alt={row.first_name} style={{ width: 50, borderRadius:100}}/></td>

              <td>{row.first_name}</td>

              <td>{row.last_name}</td>

              <td>{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
