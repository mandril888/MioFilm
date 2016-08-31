// main.js //
const mongo = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const mongoose = require('mongoose');
const Promise = require('promise');

mongoose.Promise = Promise;

const mongoUrl = 'mongodb://localhost:27017/CerberusRPCtest';
mongoose.connect(mongoUrl);

mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection open to ' + mongoUrl);
});
const masterSchema = require('./dbSchemas/masterSchema');

function checkUser(param1, callback) {
  const filter = {
    usuario: param1.usu_form,
    password: param1.pass_form,
  };
  const project = {};
  masterSchema.masterusuarios.find(filter, project)
  .populate('clientes')
  .exec( function( err, data ) {
    if (err) { return callback(false); }
    return callback(data);
  });
}

// index.js //
app.post( '/auth', ( req, res, next ) => {
  main.checkUser( req.body, ( data ) => {
    if ( data.length !== 0) {
          res.render( 'mainMenu', {
            clientes: JSON.stringify( oData.clientes ),
            ejercicios: JSON.stringify( oData.ejercicios ),
          });
    } else {
      res.send( 'No tienes acceso.' );
    }
  });
});

//esquema
var mongoose = require('mongoose');  
var Schema = mongoose.Schema;
var masterClientes = mongoose.model('MasterClientes');

var masterUsuariosSchema = new Schema (     //BD_Usuarios
  {
    "usuario": String,
    "email": String,
    "password": String,
    "nivelAcceso": Number,
    "admin": Number,
    "fecha": Date,
  });

var masterUsuarios = mongoose.model('masterUsuarios', masterUsuariosSchema);
module.exports = masterUsuarios;

//Use Mongo without mongoose
// function getMongoData(filter, project, collection, callback) {
//   filter = filter || {};
//   project = project || {};

//   // console.log('-------MONGO-------');
//   // console.log('filter: ');
//   // console.log(filter);
//   // console.log('project: ');
//   // console.log(project);
//   mongo.connect(mongoUrl, function(err, db) {
//     if (err) { console.log('Error conecting DB: ' + error);}
//     let result = db.collection(collection).find(filter, project);
//     result.toArray(function(error, data) {
//       if (error) { console.log('Error en los datos...' + err);}
//       callback(data);
//       });
//     });
// }