import jwt from 'jsonwebtoken';

// export function authMiddleware(req, res, next) {
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//         return res.status(401).json({ message: 'Unauthorized: No token provided' });
//     }

//     const token = authHeader.split(' ')[1];

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded; // Attach the decoded user info to the request object
//         next(); // Proceed to the next middleware or route handler
//     } catch (err) {
//         return res.status(401).json({ message: 'Unauthorized: Invalid token' });
//     }
// }
export async function authMiddleware(req, { json }) {
    const authHeader = req.headers.get('authorization'); // Use req.headers.get() in Next.js

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return json({ message: 'Unauthorized: No token provided' });
    }

    const token = authHeader.split(' ')[1];

    try {
        // Replace 'your-secret-key' with your actual JWT secret key
        const decoded = jwt.verify(token, 'your-secret-key'); 
        req.user = decoded; // Attach user data to the request object if needed
        return true; // Indicate success
    } catch (error) {
        return json({ message: 'Unauthorized: Invalid token' });
    }
}


export function roleMiddleware(role) {
    return (req, res, next) => {
        authMiddleware(req, res, () => {
            if (req.user.role !== role) {
                return res.status(403).json({ message: 'Forbidden: Access denied' });
            }
            next();
        });
    };
}
