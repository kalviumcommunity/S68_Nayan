const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
const port = 8080;

// Middleware
app.use(express.json());
app.use(cookieParser());

// Secret key for JWT
const JWT_SECRET = 'your_secret_key';

// Auth endpoint
app.post('/auth', (req, res) => {
    const { username, password } = req.body;

    // Dummy authentication logic
    if (username === 'admin' && password === 'password') {
        // Generate JWT token
        const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });

        // Store token in a cookie
        res.cookie('auth_token', token, { httpOnly: true, secure: false }); // Set secure: true in production with HTTPS
        return res.status(200).json({ message: 'Authentication successful' });
    } else {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Protected route example
app.get('/protected', (req, res) => {
    const token = req.cookies.auth_token;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return res.status(200).json({ message: 'Access granted', user: decoded });
    } catch (err) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
});

// Ping endpoint
app.get('/ping', (req, res) => {
    res.send('Pong');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});