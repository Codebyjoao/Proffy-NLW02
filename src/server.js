//servidor
const express = require('express')
const server = express()

const{pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//configuração nunjucks (template engine)
const nunjucks =require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//inicio configuração do servidor
server
.use(express.urlencoded({ extended: true}))
//configurar arquivos estaticos(css, scripts, imagens)
.use(express.static("public"))
//rotas das aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//Start do servidor
.listen(5510)