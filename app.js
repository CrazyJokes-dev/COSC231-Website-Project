// Imports
const express = require('express')
const{check, validationResult} = require('express-validator')
const app = express()
const port = 3000
const urlencodedParser = express.urlencoded({extended: false})


// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use(express.json())
app.use(express.urlencoded({
}))


// Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	res.render('home', { text: 'Home Page'})
})

app.get('/SignIn', (req, res) => {
	res.render('SignIn.ejs', { text: 'Sign In Page'})
})

app.get('/SignUp', (req, res) => {
	res.render('SignUp.ejs', { text: 'Sign Up Page'})
})

app.get('/cart', (req, res) => {
	res.render('cart.ejs', {text: 'Cart'})
})

app.post('/SignUp', urlencodedParser,[
	check('email','Email is not valid')
		.isEmail()
		.normalizeEmail()
	
	
], (req, res)=> {
	const errors = validationResult(req)
	if(!errors.isEmpty()){
		//return res.status(422).jsonp(errors.array())
		const alertdisplay = errors.array()
		res.render('SignUp',{
			alertdisplay
		})
	} 
})

app.post('/SignIn', urlencodedParser,[
	check('email','Email is not valid')
		.isEmail()
		.normalizeEmail()
	
	
], (req, res)=> {
	const errors = validationResult(req)
	if(!errors.isEmpty()){
		//return res.status(422).jsonp(errors.array())
		const alertdisplay = errors.array()
		res.render('SignIn',{
			alertdisplay
		})
	} 
})

app.get('/electronic', (req, res) => {
	res.render('electronic', { text: 'Electronic Page'})
})

app.get('/clothing', (req, res) => {
	res.render('clothing', { text: 'Electronic Page'})
})

app.get('/tech1', (req, res) => {
	res.render('techProduct1', { text: 'Electronic Page'})
})

app.get('/tech2', (req, res) => {
	res.render('techProduct2', { text: 'Electronic Page'})
})

app.get('/circuits1', (req, res) => {
	res.render('circuitProduct1', { text: 'Electronic Page'})
})

app.get('/circuits2', (req, res) => {
	res.render('circuitProduct2', { text: 'Electronic Page'})
})

app.get('/drone', (req, res) => {
	res.render('droneProduct', { text: 'Electronic Page'})
})

app.get('/clothing-product1', (req, res) => {
	res.render('clothingProduct1', { text: 'Electronic Page'})
})

app.get('/clothing-product2', (req, res) => {
	res.render('clothingProduct2', { text: 'Electronic Page'})
})

app.get('/clothing-product3', (req, res) => {
	res.render('clothingProduct3', { text: 'Electronic Page'})
})

app.get('/clothing-product4', (req, res) => {
	res.render('clothingProduct4', { text: 'Electronic Page'})
})

app.get('/clothing-product5', (req, res) => {
	res.render('clothingProduct5', { text: 'Electronic Page'})
})

// Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`))
