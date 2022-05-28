import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from 'src/auth'

export default ({ key, path, exact, name, element }) => {
	return (
		<Route
			key={key}
			path={path}
			exact={exact}
			name={name}
			element={element}
		/>
	)
}