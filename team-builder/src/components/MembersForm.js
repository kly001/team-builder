import React, {useState} from "react";
import membersData from "../data";

const MembersForm = props => {

    const [member, setMember] = useState({name:""})

    const changeHandler = event => {
        setMember({...member, [event.target.value]: EventTarget.value})
    }

    const submitForm = event => {
        event.preventDefault();
        const newMember = {
            member,
        }
        props.addNewMember(newMember);
    }

    return(
        <form onSubmit = {submitForm}>
            <label htmlFor = "name"> New Member Name</label>
            <input
                type="text"
                name="name"
                placeholder="Type Name Here"
                value={member.name}
                onChange={changeHandler}
                />
            <button type="submit">Add Member</button>
        </form>
    )
}
export default MembersForm