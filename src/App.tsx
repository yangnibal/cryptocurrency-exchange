import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Router from './Router'
import { RecoilRoot } from 'recoil'

const App = () => {
	return (
		<RecoilRoot>
			<BrowserRouter>
				<Router/>
			</BrowserRouter>
		</RecoilRoot>
	)
}

export default App