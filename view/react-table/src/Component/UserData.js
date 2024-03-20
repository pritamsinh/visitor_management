const UserData = ({users}) => {
    return (
        <>
        {
            users.map((curUser) => {
                const {name, email, phone, purpose, createdAt} = curUser;
                return(
                    <tr>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{phone}</td>
                        <td>{purpose}</td>
                        <td>{createdAt}</td>
                        
                    </tr>
                )
            })
        }
        </>
    )
}

export default UserData;