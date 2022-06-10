class Auth {
	constructor() {
		this.authenticated = false
	}

	login(cb) {
		localStorage.setItem('auth', 'true')
		this.authenticated = true
		cb()
	}

	logout(cb) {
		localStorage.removeItem('auth')
		this.authenticated = false
		cb()
	}

	isAuthenticated() {
		localStorage.getItem('auth')
		return this.authenticated
	}
}

export default new Auth()