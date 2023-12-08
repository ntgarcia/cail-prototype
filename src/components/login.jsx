// Login Component

function Login () {
	return (
		<div className={'flex flex-col'}>

			<h3> {'Login'} </h3>

			<form>
				<input type={'text'} placeholder={'username'} />
				<input type={'text'} placeholder={'password'} />
			</form>

		</div>
	)
}

export default Login