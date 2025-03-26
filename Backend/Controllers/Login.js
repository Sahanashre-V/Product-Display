const bcrypt = require('bcrypt');
const registerModel = require("../Model/Register");
const jwt = require("jsonwebtoken");
const env = require("dotenv").config();

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await registerModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User doesn't exist. Kindly register" });
        }

        if (!password) {
            return res.status(400).json({ message: "Password is required" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        
        if (!passwordMatch) {
            return res.status(400).json({ message: "Incorrect password" });
        }

        const token = jwt.sign(
            { username: user.username, email: user.email },
            process.env.SECRET_KEY,
            { expiresIn: '1h' }
        );

        return res.status(200).json({ token, message: "Login successful" });

    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

module.exports = login;