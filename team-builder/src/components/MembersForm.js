import React, {useState} from "react";


const MembersForm = props => {

    const [member, setMember] = useState("")

    const changeHandler = event => {
        // console.log(event)
        setMember({...member, [event.target.name]: event.target.value})
    }

    const submitForm = event => {
        console.log(event)
        event.preventDefault();
        // const newMember = {
        //     ...member,
        //     id:Date.now()
        // }
        props.addNewMember(member);
        // console.log(newMember)
    }

    return(
        <form onSubmit = {submitForm}>
            <label htmlFor = "name">  New Member Name </label>
            <input
                type="text"
                name="name"
                placeholder="Type Name Here"
                value={member.name}
                onChange={changeHandler}
                />
             <label htmlFor = "email">  New Member Email </label>    
                 <input
                type="email"
                name="email"
                placeholder="Type Email Here"
                value={member.email}
                onChange={changeHandler}
                />
             <label htmlFor = "role">  New Member Role </label>
                 <input
                type="text"
                name="role"
                placeholder="Type Role Here"
                value={member.role}
                onChange={changeHandler}
                />
            <button type="submit">Submit</button>
        </form>
    )
}
export default MembersForm