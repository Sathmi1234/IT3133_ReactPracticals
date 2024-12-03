import { flowers } from '../components/FlowerDB';
import '../assets/CSS/layout.css';

export default function Product() {
  return (
    <div className="grid-container">
      {flowers.map((flower) => (
        <div className="grid-item" key={flower.id}>
          <div className="card">
            <img src={require(`../assets/image/${flower.img}`)} alt={flower.name} />
            <div className="card-body">
              <h5 className="card-title">{flower.name}</h5>
              <h5 className="card-title">Price: ${flower.price}</h5>
              <div className="quantity-container">
                <label htmlFor={`quantity-${flower.id}`}>Quantity:</label>
                <input type="number" id={`quantity-${flower.id}`} name="quantity" />
              </div>
              <button className="card-button">Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}