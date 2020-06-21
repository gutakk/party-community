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
                    <div className="party-container">
                        {party.partyName}
                        Members: {party.members}/{party.maximumMembers}
                        <button onClick={onJoinClicked(party.partyId)}>Join this party</button>
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
    onJoinClicked: (partyId) => dispatch(onJoinClicked(partyId))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(PartyList)