import React, { useEffect, useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
	const [users, setSusers] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [succes, setSucces] = useState(true)
	const [serch, setSerch] = useState('')
	const [invets, setInvites] = useState([1])
	useEffect(() => {
		fetch('https://reqres.in/api/users').then(e => e.json()).then(json => setSusers(json.data))
		setIsLoading(false)
	}, [])
	const onChengeSerch = (e) => {
		setSerch(e.target.value)
	}

	const onClickInvait = (id) => {
		if (invets.includes(id)) {
			setInvites((prev) => prev.filter(_id => _id !== id))
		} else {
			setInvites((prev) => [...prev, id])
		}
	}
	console.log(invets)


	return (
		<div className="App">
			{succes ? <Users setSucces={setSucces} invets={invets} onClickInvait={onClickInvait}
				onChengeSerch={onChengeSerch}
				serch={serch} items={users} isLoading={isLoading} />
				: <Success count={invets.length} setSucces={setSucces} />}

		</div>
	);
}

export default App;
