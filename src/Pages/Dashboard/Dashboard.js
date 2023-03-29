import React, { useContext } from 'react'
import { useDispatch } from 'react-redux';
import Button from '../../Components/Button/Button'
import { SetUser } from '../../Redux/Action';

function Dashboard() {
  const dispatch = useDispatch();
    
  return (
    <div>
      dashbord
      <Button
                    className="width-100 height-100 bg-blue navbarFont m-0 "
                    name={"Log Out"}
                    onClick={() =>
                      dispatch(SetUser({ user: null, token: null }))
                    }
                  />
    </div>
  )
}

export default Dashboard