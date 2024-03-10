import { useEffect, useState } from 'react';
import UserData from './Component/UserData';
const API = "http://localhost:4000/visitor";


const App = () => {
	const [users, setUsers] = useState([]);

	const fetchUsers = async (url) => {
		try {
			const res = await fetch(url);
			const data = await res.json();
			if(data.length > 0){
				setUsers(data);
			}
			console.log(data);
		} catch (e) {
			console.error(e)
		}
	}
	useEffect(() => {
		fetchUsers(API);
	},)

	return<>
		<table>
			<thead>
				<tr>
				<th>Name</th>
				<th>Email</th>
				<th>Phone</th>
				<th>Purpose</th>
				<th>Date</th>
				</tr>
			</thead>
			<tbody>
				<UserData users={users} />
			</tbody>
		</table>
	</>
}
export default App
