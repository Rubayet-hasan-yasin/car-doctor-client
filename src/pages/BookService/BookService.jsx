import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const BookService = () => {
    const service = useLoaderData();
    const {user} = useContext(AuthContext);
    console.log(service);


    const handleBookService = event=>{
        event.preventDefault();

        const form = event.target;
        const Fname = form.Fname.value;
        const Lname = form.Lname.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const booking = {Fname, Lname, phone, email, img: service.img, service_id: service._id, service: service.title}
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)

        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.insertedId){
                alert('service book successfully')
            }
        })
       
    }


    return (
        <div>
            book


            <form onSubmit={handleBookService}>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" name="Fname" placeholder="First Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" name="Lname" placeholder="Last Name" className="input input-bordered" />

                    </div><div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="tel" name="phone" placeholder="Phone" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered" />

                    </div>
                </div>
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <input type="text" placeholder="Massage" className="input input-bordered py-20" />

                    </div>
                <div className="form-control mt-6">
                    <input className="btn btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>


        </div>
    );
};

export default BookService;