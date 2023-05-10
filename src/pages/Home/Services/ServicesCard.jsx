const ServicesCard = ({ service }) => {
    const { img, price, title } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl border">
            <figure className="pt-10 px-10 ">
                <img src={img} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold">{title}</h2>
                <p className="text-xl text-orange-600 font-semibold">Price: {price}</p>
                <div className="card-actions justify-end">
                    <button className="bg-red-700 bg-opacity-10 hover:bg-opacity-5  p-3 rounded-full">--></button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;