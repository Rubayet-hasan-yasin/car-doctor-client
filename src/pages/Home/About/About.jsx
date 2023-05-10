import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'


const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <figure className="rounded-lg w-96 h-80 " >
                        <img src={person} className='rounded-lg object-cover h-80' />
                    </figure>

                    <figure className='rounded-2xl w-64 h-64 absolute right-28 top-1/2'>
                        <img src={parts} className="rounded-md object-cover h-full border-8" />
                    </figure>
                </div>
                <div className='w-2/5 p-4'>
                    <h2 className='text-3xl text-orange-600 font-bold'>About Us</h2>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="pb-6">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-warning bg-orange-700 text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;