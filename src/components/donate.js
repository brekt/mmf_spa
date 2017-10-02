import React from 'react';

export default class Donate extends React.Component {
	render() {
		return (
			<div class="content" id="Donate">
				<img class="family-img" src="/img/family2.jpg" />
				<h1>Donate To Mighty Moms Foundation</h1>
				<p>Donations to Mighty Moms Foundation help us bring much needed services to women and their families. We are a 501(c)3 nonprofit organization, and your contribution is tax deductible to the full extent of the law. Please email <a href="mailto:info@mightymomsfoundation.org">info@mightymomsfoundation.org</a> with any questions.</p>
				<form class="donation-form" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
					<input type="hidden" name="cmd" value="_s-xclick" />
					<input type="hidden" name="hosted_button_id" value="MNX2YJJ9A5VR6" />
					<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
					<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
				</form>
			</div>
		);
	}
}
