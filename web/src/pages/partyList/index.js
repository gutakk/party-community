import './style.scss'
import { connect } from 'react-redux'
import { onJoinClicked, fetchPartiesAction, closeModal } from '../../redux/actions/partyListAction'

import React, { Component } from 'react'

class PartyList extends Component {
    componentDidMount = () => {
        this.props.fetchPartiesAction()
    }

    render() {
        const { onJoinClicked, closeModal, partyList, joinedMsg, joinedFailedMsg } = this.props
        return (
            <div id="party-list-container">
                <div className="menu-container">
                    <a id="create-party" href="/create-party"><i className="fa fa-plus-circle"></i> Create Party</a>
                </div>
                <div id="party-container">
                    {partyList.map(party => {
                        return (
                            <div className="party-item-container" key={party.partyId} id={party.partyId}>
                                <img id={party.partyId + "-img"} src={party.img}/>
                                <div className="party-content-container">
                                    <p id={party.partyId + "-party-name"} className="party-name">{party.partyName}</p>
                                    <p id={party.partyId + "-members"} className="members">Members: {party.members}/{party.maximumMembers}</p>
                                </div>
                                <div className="button-container">
                                    <button
                                        id={party.partyId + "-join-button"}
                                        data-index={party.partyId} 
                                        onClick={onJoinClicked}
                                        disabled={party.members >= party.maximumMembers}>
                                            {party.members >= party.maximumMembers ? "Party Full" : "Join this party"}
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {(joinedMsg || joinedFailedMsg) && <div className="overlay"></div>}
                {
                    joinedMsg && 
                    <div id="join-success-modal" className="modal">
                        <p id="join-success-msg">{joinedMsg}</p>
                        <button id="join-success-confirm-button" onClick={closeModal}>Confirm</button>
                    </div>
                }
                {
                    joinedFailedMsg && 
                    <div id="join-failed-modal" className="modal">
                        <p id="join-failed-msg">{joinedFailedMsg}</p>
                        <button id="join-failed-confirm-button" onClick={closeModal}>Confirm</button>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    partyList: state.partyList.parties,
    joinedMsg: state.partyList.joinedMsg,
    joinedFailedMsg: state.partyList.joinedFailedMsg
})
  
const mapDispatchToProps = dispatch => ({
    onJoinClicked: (e) => dispatch(onJoinClicked(e.target.getAttribute("data-index"))),
    fetchPartiesAction: () => dispatch(fetchPartiesAction()),
    closeModal: () => dispatch(closeModal())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(PartyList)