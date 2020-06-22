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
                    <a href="/create-party"><i class="fa fa-plus-circle"></i> Create Party</a>
                </div>
                <div id="party-container">
                    {partyList.map(party => {
                        return (
                            <div className="party-item-container" key={party.partyId}>
                                <img src={party.img}/>
                                <div className="party-content-container">
                                    <p className="party-name">{party.partyName}</p>
                                    <p className="members">Members: {party.members}/{party.maximumMembers}</p>
                                </div>
                                <div className="button-container">
                                    <button data-index={party.partyId} onClick={onJoinClicked}>Join this party</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {(joinedMsg || joinedFailedMsg) && <div className="overlay"></div>}
                {
                    joinedMsg && 
                    <div className="modal">
                        <p>{joinedMsg}</p>
                        <button onClick={closeModal}>Confirm</button>
                    </div>
                }
                {
                    joinedFailedMsg && 
                    <div className="modal">
                        <p>{joinedFailedMsg}</p>
                        <button onClick={closeModal}>Confirm</button>
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