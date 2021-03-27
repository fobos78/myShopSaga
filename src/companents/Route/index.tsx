import styled from "styled-components/macro";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { loadUsers } from "../../redux/slice/users";


function Route() {
  const dispatch = useDispatch();
  const allUsers: any = useSelector((state: any) => state);
  console.log("allUsers", allUsers.usersSlice.users);
  // dispatch(loadUsers());

useEffect(() => {
  dispatch(loadUsers());
},[]);


  return (
    <Wrap>
      {allUsers.usersSlice.users[0] && allUsers.usersSlice.users[0].map((el: any) => { 
        // console.log("el",el);
        
      return <h3 key={el.id}>имя-{el.name}</h3>
      })}
    </Wrap>
  );
}

export default Route;

const Wrap = styled.div`
  text-align: center;
  color: red;
`;