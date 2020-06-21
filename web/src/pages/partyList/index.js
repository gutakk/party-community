import './style.scss'
import { connect } from 'react-redux'
import { onPartyNameChanged, onMemberChanged } from '../../redux/actions/partyListAction'

import React from 'react';

const PartyList = ({
    partyList, 
    members
}) => {
    return (
        <div id="party-list-container">
            {partyList.map(party => {
                return (
                    <div className="party-container">
                        {party.partyName}
                        Members: {party.members}/{party.maximumMembers}
                        <button>Join this party</button>
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
    onPartyNameChanged: (e) => dispatch(onPartyNameChanged(e.target.value)),
    onMemberChanged: (e) => dispatch(onMemberChanged(e.target.value))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(PartyList)