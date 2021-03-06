import React, { Fragment } from 'react'
import { recaptchaKey } from '../../site-config'
import Form from '../export'

export default class HomePage extends React.Component {
	render() {
		return (
			<Form
				name='test'
				recaptcha={{
					size: `normal`,
					sitekey: recaptchaKey,
				}}
			>
				{({loading, error, success, recaptchaError, recaptcha}) => (
					<div>
						{loading && `Loading...`}
						{error && `Error.`}
						{recaptchaError && `Recaptcha error.`}
						{success && `Success.`}
						{!loading && !success &&
							<Fragment>
								<div>
									<input type='text' name='Name' required />
								</div>
								<div>
									<textarea name='Message' required />
								</div>
								<div>
									{recaptcha}
								</div>
								<div>
									<button>Submit</button>
								</div>
							</Fragment>
						}
					</div>
				)}
			</Form>
		)
	}
}