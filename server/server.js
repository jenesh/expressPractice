import Express from 'express'
import cors from 'cors'
import pg from 'pg-promise'

const config = {
    host: 'localhost',
    port: PORT,
    database: 'todo_react',
};

const db = pg()(config);

const app = Express();
const PORT = 3000;

// app.use(cors())
// app.use(Express.urlencoded({extended: flase}))

app.get('/:id', async (req, res) => {
    const query = `SELECT * FROM todos WHERE users_id = $1`
    const data = await db.any(query, [req.params.id])
    console.log(data)
    res.send(data)
})

app.get('/', (req, res) => {
    res.send('Working yess')
})

app.listen(PORT, () => {
    console.log(`Live at port ${PORT}`);
})