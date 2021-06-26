import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({ id, name, image, price }) => {
  const url = image && image.url;
  console.log(image, name, price);

  return (
    <article className='product'>
      <img src={url || defaultImage} alt={name || 'default name'} />
      <h4>{name || 'default name'}</h4>
      <p>{price || 100.90}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

/* 
Product.defaultProps = {
  name: 'dafault name',
  price: 0.00,
  image: defaultImage
}
 */

export default Product;
