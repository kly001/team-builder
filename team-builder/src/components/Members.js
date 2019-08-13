import React from "react";

const Members = props => {
    return(
        <div>
            {props.membersList.map(member => {
                return (
                    <div className="member" key = {member.index}>
                        <h2>{member.name}</h2>
                    </div>
                )
            })}

        </div>
    )
}
export default Members;