const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost/tiendaC')
    .then((db) => console.log('DB concectado'))
    .catch((err) => console.error(err))


// mongoose.connect(
//     "mongodb://localhost/tiendaC",
//     {useNewUrlParser: true},
//     (err,res)=>{
//         err && console.log('error conectando a la db');

//         app.listen(4000, ( )=> {
//             console.log('servidor corriendo en localhost:4000')
//         });
//     }
// )
