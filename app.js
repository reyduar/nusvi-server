// Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Inicializar variables
var app = express();

// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Importar rutas
var appRoutes = require("./routes/appRoute");
var usuarioRoutes = require("./routes/usuarioRoute");
var loginRoutes = require("./routes/loginRoute");
var hospitalRoutes = require('./routes/hospitalRoute');
var medicoRoutes = require('./routes/medicoRoute');
var busquedaRoutes = require('./routes/busquedaRoute');
var uploadRoutes = require('./routes/uploadRoute');
var imagenesRoutes = require('./routes/imagenesRoute');

// Conexión a la base de datos
mongoose.connection.openUri('mongodb://admin:password@ds163699.mlab.com:63699/node-api-mdb', (err, res) => {
    if (err) throw err;
    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
});

// Server index config
// var serveIndex = require('serve-index');
// app.use(express.static(__dirname + '/'))
// app.use('/uploads', serveIndex(__dirname + '/uploads'));


// Rutas
app.use('/login', loginRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/hospital', hospitalRoutes);
app.use('/medico', medicoRoutes);
app.use('/busqueda', busquedaRoutes);
app.use('/upload', uploadRoutes);
app.use('/img', imagenesRoutes);
app.use('/', appRoutes);



// Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});