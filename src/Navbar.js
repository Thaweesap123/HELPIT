import React, { useEffect } from 'react'
import { Link,} from 'react-router-dom';
import Button from '@mui/material/Button';


function Navbar() {
    useEffect(() => {
        const token = localStorage.getItem('token')
        fetch('http://localhost:5000/authen', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' +token
          }
        })
          .then(response => response.json())
          .then(data => {
            console.log(data)
            if(data.status === "ok"){
              alert('authen Success')
              }
            else{
              alert("authen Failed")
              localStorage.removeItem('token')
              window.location = '/login'
            }
          })
        .catch((error) => {
          console.error('Error:', error);
        });
      }, [])
      const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token')
        window.location = '/login'
      }
    return (
        <>
            <div className='navigation'>
                <nav>
                    <ul>
                        <h1>HELPIT</h1>
                        <li class="list_active">
                            <Link to="/App.js">
                                <span class="icon">
                                    <ion-icon name="home-outline"></ion-icon>
                                </span>
                                <span class="text"> Home</span>
                            </Link>
                        </li>
                        <li class="list_active">
                            <Link to="/about">
                                <span class="icon">
                                    <ion-icon name="people-outline"></ion-icon>
                                </span>
                                <span class="text"> About</span>
                            </Link>
                        </li>
                        <li class="list_active">
                            <Button color="error" variant="contained" onClick={handleLogout}>Logout</Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar;