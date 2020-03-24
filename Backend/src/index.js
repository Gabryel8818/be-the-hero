
/**
* Rota / Recursos
*
*
*
* Métodos HTTP
*
* GET
* POST
* PUT - Alterar
* DELETE
*/



/**
*Tipos de Parâmetros:
*
* Query: Parâmetros nomeados enviados na rota após o simbolo *?* (Filtros, paginação )
* Route Params: Parâmetros utilizados para identificar recursos
*/


/**

* SQL:   mySQL, SQlite, PostegreSQL, Oracle,
* NoSQL: MongoDB, CouchDB, MariaDB

*/

const routes = require('./routes')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)





app.listen(3333)
