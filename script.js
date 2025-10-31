//your code here
body {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(to right, #a8e063, #56ab2f);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.product {
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  max-width: 900px;
  overflow: hidden;
}

.product_photo {
  flex: 1;
  background: #f5f5f5;
  padding: 20px;
}

.photo-container {
  text-align: center;
}

.photo-main img {
  width: 250px;
  border-radius: 10px;
}

.controls {
  text-align: right;
  margin-bottom: 10px;
}

.controls i {
  color: #888;
  margin-left: 10px;
  cursor: pointer;
  transition: color 0.3s;
}

.controls i:hover {
  color: #4caf50;
}

.photo-album ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
  padding: 0;
}

.photo-album ul li img {
  width: 60px;
  height: 60px;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s;
}

.photo-album ul li img:hover {
  transform: scale(1.1);
}

.product_info {
  flex: 1;
  padding: 30px;
}

.title h1 {
  margin: 0;
  color: #333;
}

.title span {
  font-size: 14px;
  color: #666;
}

.price {
  margin: 20px 0;
  font-size: 1.8em;
  color: #e53935;
}

.variant ul {
  list-style: none;
  display: flex;
  gap: 10px;
  padding: 0;
}

.variant ul li img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s;
}

.variant ul li img:hover {
  transform: scale(1.1);
}

.description {
  background: #f9f9f9;
  padding: 15px;
  border-radius: 10px;
  margin-top: 20px;
}

button {
  margin-top: 20px;
  padding: 12px 25px;
  border: none;
  border-radius: 25px;
  background: #4caf50;
  color: white;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #43a047;
}
