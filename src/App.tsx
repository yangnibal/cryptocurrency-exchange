import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Router from './Router'

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Router/>
			</Switch>
		</BrowserRouter>
	)
}

export default App