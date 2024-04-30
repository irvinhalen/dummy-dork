import { useEffect, useState } from 'react';
import './App.css'
import Axios from 'axios';
import { Card } from 'react-bootstrap'

interface Products {
  id: number,
  title: string,
  description: string,
  price: number
}

function App() {
  const [listOfProducts, setListOfProducts] = useState<Array<Products>>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () =>{
    Axios.get('http://localhost:3001/api/products').then((response) => {
      if(response.status === 200) {
        setListOfProducts(response.data.products);
      }
    });
  };

  return (
    <div className='container d-flex flex-column justify-content-center h-100 w-100'>
      <h1 className='mt-5'>☝️🤓 Dummy Dork</h1>
      <div className='bg-light h-100 my-5'>
        { listOfProducts.length ? (
          listOfProducts.map((product) => {
            return (
              <Card className='shadow-sm border-0'>
                <Card.Header className='border-0'>
                  <Card.Title>{product.title}</Card.Title>
                </Card.Header>
                <Card.Body>Howdy</Card.Body>
                <Card.Footer className='border-0'>{product.description}</Card.Footer>
              </Card>
            )
          })
        ) : ('') }
      </div>
    </div>
  )
}

export default App
