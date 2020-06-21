import './style.scss'
import { connect } from 'react-redux'
import { onJoinClicked } from '../../redux/actions/partyListAction'

import React from 'react';

const PartyList = ({
    onJoinClicked,
    partyList, 
    members,
}) => {
    return (
        <div id="party-list-container">
            {partyList.map(party => {
                return (
                    <div className="party-container" key={party.partyId}>
                        {party.partyName}
                        Members: {party.members}/{party.maximumMembers}
                        <button data-index={party.partyId} onClick={onJoinClicked}>Join this party</button>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    partyList: state.partyList.parties,
    members: state.partyList.members,
    maximumMembers: state.partyList.maximumMembers
})
  
const mapDispatchToProps = dispatch => ({
    onJoinClicked: (e) => dispatch(onJoinClicked(e.target.getAttribute("data-index")))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(PartyList)