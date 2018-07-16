let express = require('express');
let svgCaptcha = require('svg-captcha');

let path = require('path');

let app = express();

app.use(express.static('statics'));

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'statics/views/login.html'));
})

app.get('/login/captchaImg',(req, res)=> {
	var captcha = svgCaptcha.create();
	console.log(captcha.text); 
	
	res.type('svg'); // 使用ejs等模板时如果报错 res.type('html')
	res.status(200).send(captcha.data);
});
app.listen(80,'127.0.0.1',()=>{
    console.log('success');
})