import React from "react";

const Members = props => {
    return(
        <div>
            {props.membersList.map(member => {
                return (
                    <div className="member" key = {member.index}>
                        <p>{member.name}</p>
                    </div>
                )
            })}

        </div>
    )
}
export default Members;