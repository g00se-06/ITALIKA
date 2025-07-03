import express from 'express'

let app = express()

app.listen(3000, () => {
	console.log('start on 3000');
})