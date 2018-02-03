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
