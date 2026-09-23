import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.json({ 
    message: 'Illusion Mala API - Gudiya Anda Mala Store',
    contact: '8739002047'
  });
});

app.listen(PORT, () => {
  console.log(`✨ Server running on port ${PORT}`);
  console.log(`📞 Contact: 8739002047`);
});
