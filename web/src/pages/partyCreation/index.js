import './style.scss'
import { connect } from 'react-redux'
import { onPartyNameChanged, onMemberChanged, onCreatePartyClicked, closeModal, closeModalAndRedirect } from '../../redux/actions/partyCreationAction'

import React from 'react';

const PartyCreation = ({ 
    onPartyNameChanged, 
    onMemberChanged,
    onCreatePartyClicked,
    closeModalAndRedirect,
    closeModal,
    partyName, 
    maxMembers,
    createSuccessMsg,
    createFailedMsg
}) => {
    return (
        <div id="party-creation-container">
            <div id="party-creation-form-container">
                <h1>Create Party</h1>
                <form onSubmit={(e) => {e.preventDefault(); onCreatePartyClicked()}}>
                    <label>Party name</label>
                    <input type="text" onChange={onPartyNameChanged} value={partyName} required></input>
                    <label>Members</label>
                    <input type="number" onChange={onMemberChanged} value={maxMembers} required></input>
                    <div className="button-container">
                        <button 
                            type="submit" 
                            disabled={!partyName || !maxMembers}>
                                Create Party
                        </button>
                    </div>
                </form>
            </div>
            {(createFailedMsg || createSuccessMsg) && <div className="overlay"></div>}
            {
                createFailedMsg && 
                <div className="modal">
                    <p>{createFailedMsg}</p>
                    <button onClick={closeModal}>Confirm</button>
                </div>
            }
            {
                createSuccessMsg && 
                <div className="modal">
                    <p>{createSuccessMsg}</p>
                    <button onClick={closeModalAndRedirect}>Confirm</button>
                </div>
            }
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
    onCreatePartyClicked: () => dispatch(onCreatePartyClicked()),
    closeModalAndRedirect: () => dispatch(closeModalAndRedirect()),
    closeModal: () => dispatch(closeModal())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(PartyCreation)