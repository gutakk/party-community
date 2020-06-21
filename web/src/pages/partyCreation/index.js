import './style.scss'
import { connect } from 'react-redux'
import { onPartyNameChanged, onMemberChanged, onCreatePartyClicked } from '../../redux/actions/partyCreationAction'

import React from 'react';

const PartyCreation = ({ 
    onPartyNameChanged, 
    onMemberChanged,
    onCreatePartyClicked,
    partyName, 
    maxMembers,
    createSuccessMsg,
    createFailedMsg
}) => {
    return (
        <div id="party-creation-container">
            <form onSubmit={(e) => {e.preventDefault(); onCreatePartyClicked()}}>
                <label>Party name</label>
                <input type="text" onChange={onPartyNameChanged} value={partyName} required></input>
                <label>Members</label>
                <input type="number" onChange={onMemberChanged} value={maxMembers} required></input>
                <button 
                    type="submit" 
                    disabled={!partyName || !maxMembers}>
                        Create Party
                </button>
            </form>
            {createFailedMsg && <div className="modal">{createFailedMsg}</div>}
            {createSuccessMsg && <div className="modal">{createSuccessMsg}</div>}
        </div>
    )
}

const mapStateToProps = state => ({
    partyName: state.partyCreation.partyName,
    maxMembers: state.partyCreation.maxMembers,
    createSuccessMsg: state.partyCreation.createSuccessMsg,
    createFailedMsg: state.partyCreation.createFailedMsg,
})
  
const mapDispatchToProps = dispatch => ({
    onPartyNameChanged: (e) => dispatch(onPartyNameChanged(e.target.value)),
    onMemberChanged: (e) => dispatch(onMemberChanged(e.target.value)),
    onCreatePartyClicked: () => dispatch(onCreatePartyClicked())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(PartyCreation)