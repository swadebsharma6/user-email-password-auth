import PropTypes from 'prop-types';

const Phone = ({phone}) => {
    const {image, brand_name, price, phone_name} = phone;
    return (
        <div className='m-4'>
        <div className="card w-96 bg-base-100 shadow-2xl border">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{brand_name}</h2>
          <p>Name: {phone_name}</p>
          <p>Price: $ {price}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div> 
        </div>
    );
};

Phone.propTypes = {
    
    phone: PropTypes.object,
}
export default Phone;