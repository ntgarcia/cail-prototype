// Activity Page

import ItemList from "components/item-list/item-list"
import { useState } from "react"
import { activities } from "utils/data"

function Activity() {

	const btnStyle = 'px-4 py-2 bg-slate-700 text-slate-100 font-bold mx-4 my-2 rounded-md'

	const inputStyle = 'px-3 py-2 my-1 rounded-md';

	const [add, setAdd ] = useState( false )
	const [ list, setList ] = useState( activities )

	const [title, 		setTitle] = useState('')
	const [type,		setType] = useState('')
	const [studentID,	setStudentID] = useState('')
	const [date, 		setDate] = useState(new Date())
	const [descp, 		setDescp] = useState('')
	const [approved, 	setApproved] = useState(false)
	const [completed, 	setCompleted] = useState(false)

	const render_AcivityForm = () => {
		return (
			<div className={'flex flex-col gap-2'}>
				<h3> {'Add Activity'} </h3>
				<input className={inputStyle} type={'text'} placeholder={'title'} onInput={e => setTitle(e.target.value)} />
				<input className={inputStyle} type={'text'} placeholder={'type'} onInput={e => setType(e.target.value)} />
				<input className={inputStyle} type={'text'} placeholder={'student ID'} onInput={e => setStudentID(e.target.value)} />
				<input className={inputStyle} type={'date'} placeholder={'scheduled date'} onInput={e => setDate(e.target.value)} />
				<input className={inputStyle} type={'text'} placeholder={'desscription'} onInput={e => setDescp(e.target.value)} />
				<label> {'Approved'} </label>
				<input className={inputStyle} type={'checkbox'} placeholder={'approved'} onInput={e => setApproved(e.target.value)} />
				<label> {'Completed'} </label>
				<input className={inputStyle} type={'checkbox'} placeholder={'completed'} onInput={e => setCompleted(e.target.value)} />
				<button onMouseDown={() => add_Activity()}> {'Create Activity'} </button>
			</div>
		)
	}

	const add_Activity = () => {
		const newActivity = {
			"title":			title		,
			"type":				type		,
			"studentID":		studentID	,
			"Scheduled_Date":	date		,
			"description": 		descp		,
			"isApproved": 		approved	,
			"isCompleted": 		completed	,
		}

		const newList = [ ...list, newActivity ]

		console.log( newList );

		setList( newList )
		setAdd( false )
	}

	const switch_AddActivity = () => {

		if ( !add ) {
			return ( <button className={ btnStyle } onMouseDown={ () => setAdd( true )} > {'Add Activity'} </button> )
		} else {
			return render_AcivityForm()
		}
	}

	return (
		<div className={'flex flex-col'}>
			{ switch_AddActivity() }
			<ItemList data={ list } />
		</div>
	)
}

export default Activity