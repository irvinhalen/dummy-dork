import { Fragment, useEffect, useState } from 'react';
import './App.css'
import Axios from 'axios';
import { Card, Carousel, Col, Row, Container } from 'react-bootstrap'
import Background from './Background';
import Loading from './Loading';

interface Products {
  id: number,
  title: string,
  description: string,
  price: number,
  thumbnail: string,
  images: Array<string>
}

function App() {
  const [listOfProducts, setListOfProducts] = useState<Array<Products>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    setLoading(true);
    Axios.get('http://localhost:3001/api/products').then((response) => {
      if(response.status === 200) {
        setListOfProducts(response.data.products);
      }
      setLoading(false);
    });
  };

  return (
    <Fragment>
      <Background />
      <div className='container d-flex flex-column justify-content-center h-100 w-100'>
        <h1 id='dd-title' className='mt-5'>☝️🤓 Dummy Dork</h1>
        <div id='dummy-dork-div' className='bg-light h-100 my-5'>
          <Container>
            <Row>
              { loading ? 
                <Loading />
              :
                listOfProducts.length ? (
                  listOfProducts.map((product) => {
                    return (
                      <Col
                        xs='12'
                        s='12'
                        md='4'
                        lg='4'
                        xl='4'
                      >
                        <Card className='shadow-sm border-0 p-0 dd-card'>
                          <Card.Header className='bg-white border-0 dd-card-header'>
                            <Card.Title className='d-flex flex-row justify-content-between align-items-center'>
                              <div className='not-bold'>
                                { product.id }: { product.title }
                              </div>
                              <div>
                                ${ product.price }
                              </div>
                            </Card.Title>
                          </Card.Header>
                          <Card.Body className='p-0'>
                            <Carousel
                              controls={false}
                              indicators={false}
                              pause='hover'
                            >
                              <Carousel.Item interval={2000}> 
                                <img 
                                  className="d-block w-100"
                                  src={ product.thumbnail }
                                  alt="device"
                                /> 
                              </Carousel.Item>
                              { product.images.map((image) => {
                                  if(!image.includes('thumbnail')){
                                    return (
                                      <Carousel.Item interval={2000}> 
                                        <img 
                                          className="d-block w-100"
                                          src={image}
                                          alt="device"
                                        /> 
                                      </Carousel.Item>
                                    )
                                  }
                                })
                              }
                            </Carousel>
                          </Card.Body>
                          <Card.Footer className='bg-white border-0 thin dd-card-footer'>
                            { product.description }
                          </Card.Footer>
                        </Card>
                      </Col>
                    )
                  })
                ) : ('')
              }
            </Row>
          </Container>
        </div>
      </div>
    </Fragment>
  )
}

export default App
