require('dotenv').config({ path: '../.env' });
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];

        if (!token) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        // Verify the JWT token
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        // Attach the decoded token to the request object
        req.user = decodedToken.user;

        next();
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            // If the token is invalid or expired
            console.error('Error authenticating user:', error);
            return res.status(401).json({ error: 'Invalid or expired token' });
        }

        console.error('Error authenticating user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = authMiddleware;