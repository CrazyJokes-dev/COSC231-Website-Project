// Imports
const express = require('express')
const app = express()
const port = 3000


// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
	res.render('home', { text: 'Home Page'})
})

app.get('/sign-in', (req, res) => {
	res.render('SignIn', { text: 'Sign In Page'})
})

app.get('/sign-up', (req, res) => {
	res.render('SignUp', { text: 'Sign Up Page'})
})



// Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`))