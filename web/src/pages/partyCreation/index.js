import './style.scss'
import { connect } from 'react-redux'
import { onPartyNameChanged, onMemberChanged } from '../../redux/actions/partyCreationAction'

import React from 'react';

const PartyCreation = ({ 
    onPartyNameChanged, 
    onMemberChanged,
    partyName, 
    members
}) => {
    return (
        <div id="party-creation-container">
            <form>
                <label>Party name</label>
                <input type="text" onChange={onPartyNameChanged} value={partyName} required></input>
                <label>Members</label>
                <input type="number" onChange={onMemberChanged} value={members} required></input>
                <button 
                    type="submit" 
                    disabled={!partyName || !members}>
                        Create Party
                </button>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    partyName: state.partyCreation.partyName,
    members: state.partyCreation.members
})
  
const mapDispatchToProps = dispatch => ({
    onPartyNameChanged: (e) => dispatch(onPartyNameChanged(e.target.value)),
    onMemberChanged: (e) => dispatch(onMemberChanged(e.target.value))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(PartyCreation)