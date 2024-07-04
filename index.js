const express = require('express');
const session = require('express-session');
const passport = require('passport');
const app = express();

require('./auth');

function logado(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

app.use(session({secret: 'cats'}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Autenticar com o Google</a>');
});

app.get('/auth/google', passport.authenticate('google', {
    scope: ['email', 'profile']
}));

app.get('/google/callback', passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/failure'
}));

app.get('/auth/failure', (req, res) => {
    res.send('Algo deu errado.');
});

app.get('/protected', logado, (req, res) => {
    res.send('Olá ' + req.user.displayName + ', você está logado pelo ' + req.user.provider.toUpperCase() + ' através do email ' + req.user.email + '!');
});

app.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('Até mais!');
});

app.listen(8001, () => console.log('Rodando na porta 8001'));