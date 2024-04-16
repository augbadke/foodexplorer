# Food Explorer - Backend

This project is the result of the final challenge of Rocketseat's Explorer course. The goal was to develop an application for a restaurant, providing users with the ability to register, place orders, make payments, track order status, and add items to favorites. Additionally, it allows a user with administrative privileges to add new items to the menu and update the status of orders.

The result can be seen at: https://fdexplorer.netlify.app/

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/)
- [Knex.js](http://knexjs.org/)
- [JSON Web Token](https://jwt.io/)
- [BCrypt.js](https://github.com/dcodeIO/bcrypt.js/)
- [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Nodemon](https://nodemon.io/)
- [Multer](https://www.npmjs.com/package/multer)
- [PM2](https://pm2.keymetrics.io/)

## How to Start the Application

1. **Navigate to the backend directory:**
   ```bash
   cd foodexplorer/foodexplorer - backend
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Start the application:**
   ```bash
   npm run dev
   ```

4. **Create a .env file containing the environment variables shown in the .env.example file and assign values to these variables.**