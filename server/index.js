import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 3001;

// In-memory store for users (for demonstration purposes)
const users = [];
let userIdCounter = 1;

const JWT_SECRET = 'your-super-secret-key'; // Use an environment variable in production

app.use(cors());
app.use(express.json());

app.post('/auth/signup', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(409).json({ message: 'User already exists.' });
  }

  const newUser = { id: userIdCounter++, email, password }; // In a real app, hash the password
  users.push(newUser);

  console.log('Users:', users);
  res.status(201).json({ message: 'User created successfully.' });
});

app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }

  const userPayload = { id: user.id, email: user.email };
  const token = jwt.sign(userPayload, JWT_SECRET, { expiresIn: '1h' });

  res.json({ token, user: userPayload });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});