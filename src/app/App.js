import 'app/App.css';
import Activity from 'pages/activity';
import { useState } from 'react';
import { users } from 'utils/data';

function App() {

	const inputStyle = 'px-3 py-2 my-1 rounded-md';

	const [user, setUser] = useState('');
	const [pswd, setPswd] = useState('');

	const [logged, setLogged] = useState(false)

	const verify_Login = (user, pswd) => {

		let response = Object.values(users).filter(e => e.user === user && e.pswd === pswd);

		if (response.length > 0) {
			setLogged(true)
			return true

		} else {
			return false
		}
	}

	const render_Login = () => {
		return (
			<div className={'flex flex-col w-64'}>

				<h3> {'Login'} </h3>

				<div className={'flex flex-col gap-1'}>
					<input className={inputStyle} type={'text'} placeholder={'username'} onInput={e => setUser(e.target.value)} />
					<input className={inputStyle} type={'text'} placeholder={'password'} onInput={e => setPswd(e.target.value)} />
					<button className={inputStyle + ' bg-slate-200'} onMouseDown={() => verify_Login(user, pswd)}> {'Login'} </button>
				</div>

			</div>
		)
	}

	const render_Main = () => {
		if (!logged) { return render_Login() } else { return <Activity /> }
	}

	return (
		<main className={'App bg-slate-200 min-h-screen flex flex-col justify-start items-center gap-4 py-6'}>

			<h1 className={'font-bold'}> {'CAIL Project - Prototype'} </h1>

			{render_Main()}

		</main>
	);
}

export default App;