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

app.get('', (req, res) => {
	res.render('home', { text: 'Home Page'})
})

app.get('/SignIn', (req, res) => {
	res.render('SignIn', { text: 'Sign In Page'})
})

app.get('/SignUp', (req, res) => {
	res.render('SignUp', { text: 'Sign Up Page'})
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
	} else {
		
	}
})



// Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`))
