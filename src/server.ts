import express from 'express';
import routes from './routes';

const app = express();  
app.use(express.json());
app.use(routes);

const PORT:string|number= process.env.PORT || 3000;

app.listen(PORT,()=>{
 console.log(`Server started at http://localhost:${PORT}`);
});
