const express =require('express')

const app = express()
const path = require('path')
const hbs = require('hbs')

const puerto = 8380

//servidor de contenido estatico
app.use(express.static('public'))

//configracion del directorio que guardara las vistas hbs
app.set('views', path.join(__dirname+'/public/views'))
app.set('view engine', 'hbs')

//configuracion del directorio qe guardara los archivos parciales hbs
hbs.registerPartials(__dirname+'/public/views/partials');


app.get('/', (req, res) =>{
    // res.write('Home')
    // res.end()
    res.render('disponibilidad',
    {
        titulo: 'disponibilidad',
        nombre: 'Deimer ibarguen'
    }
)
})

app.listen(puerto,() => {
    console.log(`Escuchando por el puerto ${puerto}`)
})