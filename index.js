import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/test', (req, res) => {
    res.send("Hello World test");
})

let jsonData = [];

app.post('/addProducts', (req, res) => {
  let bodyData = req.body;
  jsonData.push(bodyData);

  return res.status(200).send({
    status: 200,
    message: "Product added successfully !!",
    data: bodyData,
    error: false,
  });
})

app.get('/getProducts', (req, res) => {  
    return res.status(200).send({
      status: 200,
      message: "Get product list successfully !!",
      data: jsonData,
      error: false,
    });
})

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})