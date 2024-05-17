import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const HotSales = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      originalPrice: '$100',
      discountedPrice: '$80',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 2,
      name: 'Product 2',
      originalPrice: '$200',
      discountedPrice: '$150',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 3,
      name: 'Product 3',
      originalPrice: '$300',
      discountedPrice: '$250',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 4,
      name: 'Product 4',
      originalPrice: '$400',
      discountedPrice: '$350',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 5,
      name: 'Product 5',
      originalPrice: '$500',
      discountedPrice: '$450',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 4,
    },
  };

  return (
    <div className="container mt-5 pb-5">
      <h2 className="text-center mb-4">Hot Sales</h2>
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
        {products.map(product => (
          <div key={product.id} className="p-2">
            <div className="card h-100 text-center">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-muted"><del>{product.originalPrice}</del></p>
                <p className="card-text text-danger font-weight-bold">{product.discountedPrice}</p>
                <button className="btn btn-primary">
                  <i className="fas fa-shopping-cart"></i> Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default HotSales;
