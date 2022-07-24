const express = require('express');
const userRoute = require('./routes/userRoute');
const errorMiddleware = require('./middlewares/errorMiddleware');

const port = process.env.PORT || 3005
const app = express();

app.use(express.json());

app.use('/users', userRoute);

app.use(errorMiddleware);

app.listen(port, () => console.log(`Ouvindo na porta ${port}`));