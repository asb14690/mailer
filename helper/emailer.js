/*
 * Application Logic
 */

module.exports = {
    'sendmail': function(req, res) {
    	console.log(req.body);
        if (!req.body.name || !req.body.email || !req.body.phone || !req.body.adults || !req.body.duration || !req.body.departure_city || !req.body.checkout_date) {
            res.json({
                status: 0,
                messages: 'Please fill all required filled'
            })
        } else {
            var api_key = 'key-363e31a0e3b8e5aeb4055866b581ef8e';
            var domain = 'sandbox78dd3337484e4f1b9574fe0dbb14ba2c.mailgun.org';
            var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

            var data = {
                from: 'Mysmartyatra<'+req.body.email+'>',
                to: 'mysmartyatra0@gmail.com',
                subject: 'Travel Query From '+req.body.name,
                html: '<p>Hi,</p><P style="color:green">This email is genrated from <a href="http://www.mysmartyatra.com/">www.mysmartyatra.com</a></p><p>Please find the belew details of customer</p><table style="border:1px solid #000000; width:300px"> <tr> <td>Name:</td> <td>'+req.body.name +'</td> </tr><tr> <td>Email:</td> <td>'+req.body.email+'</td> </tr><tr> <td>phone:</td> <td>'+req.body.phone+'</td> </tr><tr> <td>Adults:</td> <td>'+req.body.adults+'</td> </tr><tr> <td>Duration:</td> <td>'+req.body.duration+'</td> </tr><tr> <td>Departed City:</td> <td>'+req.body.departure_city+'</td> </tr><tr> <td>Checkout Date:</td> <td>'+req.body.checkout_date+'</td> </tr></table><br /><br /><br /><br /><p>Regards</p><p>My Smart Yatra</p>'
            };

            mailgun.messages().send(data, function(error, body) {
                if(error){
                	res.json({
		                status: 0,
		                messages: 'There is an error to send email'
		            })
                }else{
                	res.json({
		                status: 1,
		                messages: 'We have accepted your request. We will connect you shortly'
		            })
                }
            });
        }

    }
}