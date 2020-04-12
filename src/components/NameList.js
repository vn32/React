import React from 'react'

function NameList() {
    const Name=['Bruce','Clark','Diana']
    const NList=Name.map(N => <h2>{N}</h2>)
    return (
        <div>
            {NList}
        </div>
    )
}

export default NameList
