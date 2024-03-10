const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://senca-health:m0rMvJ0n2W2CGIcv@cluster0.gzkpw83.mongodb.net/?retryWrites=true&w=majority';

async function run() {
  try {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await client.connect();

    const productsCollection = client.db('products').collection('products');
    const userCollection = client.db('products').collection('users');

    app.get('/products', async (req, res) => {
      try {
        const query = {};
        const products = await productsCollection.find(query).toArray();
        res.json(products);
      } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });

    app.post('/products', async (req, res) => {
      try {
        const newProduct = req.body;
        const result = await productsCollection.insertOne(newProduct);
        res.status(201).json(result.ops[0]);
      } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });

    app.post('/register', async (req, res) => {
      try {
        const newUser = req.body;
        console.log(newUser,'n')
        const result = await userCollection.insertOne(newUser);
        res.status(201).json(result.ops[0]);
      } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

run().catch(console.log);

app.get('/', async (req, res) => {
  res.send('Doctors portal server is running');
});

app.listen(port, () => console.log(`Doctors server listening on port ${port}`));
