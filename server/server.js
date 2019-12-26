import Express from 'express'
import cors from 'cors'
import pg from 'pg-promise'
import ReactDOMServer from 'react-dom/server'
import App from '../src/App'

const config = {
    host: 'localhost',
    port: PORT,
    database: 'todo_react',
}

const db = pg()(config);
const app = Express();
const PORT = 3000;

// app.use(cors())
// app.use(Express.urlencoded({extended: flase}))

app.use(Express.static('./build'))

app.get('/:id', async (req, res) => {
    const query = `SELECT * FROM todos JOIN users ON (todos.users_id = users.id) WHERE users_id = $1`
    const data = await db.any(query, [req.params.id])
    console.log(data)
    res.send(data)
})

app.get('/', (req, res) => {
    res.render(ReactDOMServer.renderToString(<App />))
})

app.listen(PORT, () => {
    console.log(`Live at port ${PORT}`);
})
