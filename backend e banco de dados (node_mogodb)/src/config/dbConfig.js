const  mongoose =  require('mongoose')
const dbConfig = 'mongodb+srv://usuario:usuario@cluster0.o175i.mongodb.net/annotations?retryWrites=true&w=majority'
const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;
