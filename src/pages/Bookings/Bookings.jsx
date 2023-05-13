import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingsRow from "./BookingsRow";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();

    const url = `https://car-doctor-server-mauve.vercel.app/bookings?email=${user?.email}`;
    
    useEffect(()=>{
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
        .then(res=> res.json())
        .then(data=> {
            // console.log(data)
            if(!data.error){
                setBookings(data)
            }
            else{
                navigate('/');
            }
        })
    },[user])

// console.log(bookings);

const handleDelete = id => {
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

            fetch(`https://car-doctor-server-mauve.vercel.app/bookings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        const remaining = bookings.filter(booking=> booking._id !== id);
                        setBookings(remaining)
                    }
                })


        }
    })
}


const handleConfirm = id =>{
    fetch(`https://car-doctor-server-mauve.vercel.app/bookings/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({status: 'confirm'})
    })
    .then(res=> res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount > 0){
            //update state 
            const reamining = bookings.filter(booking=> booking._id !== id);
            const updated = bookings.find(booking=> booking._id === id);
            updated.status = 'confirm';
            const newBookings = [updated, ...reamining]
            setBookings(newBookings)
        }
    })

}




    return (
        <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Service</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        bookings.map(booking=> <BookingsRow
        key={booking._id}
        booking={booking}
        handleDelete={handleDelete}
        handleConfirm={handleConfirm}
        ></BookingsRow>)
      }
      
    </tbody>
    
  </table>
</div>
    );
};

export default Bookings;