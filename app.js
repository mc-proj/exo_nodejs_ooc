const express = require('express');

const app = express();

//ceci est un middleware
app.use((req, res, next) => {
    console.log("requete recue");
    next(); //envoie vers le middleware suivant
});

app.use((req, res, next) => {
    res.status(201); //on renvoie un 201 -- on ne peux plus modifier type reponse http pour la suite
    next(); //envoie vers le middleware suivant
});


//ceci est un autre middleware
app.use((req, res, next) => {
    res.json({
        "message": "requete bien recue !"
    });
    next();
})


//middleware filan -> pas de next
app.use((req, res) => {
    console.log("je suis le final middleware !!!");
});

module.exports = app; //pr pouvoir acceder à ce fichier depuis d'autres fichiers (require)