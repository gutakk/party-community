import './style.scss'
import { connect } from 'react-redux'
import { onJoinClicked, fetchPartiesAction } from '../../redux/actions/partyListAction'

import React, { Component } from 'react'

class PartyList extends Component {
    componentDidMount = () => {
        this.props.fetchPartiesAction()
    }

    render() {
        const {onJoinClicked, partyList} = this.props
        return (
            <div id="party-list-container">
                <a href="/create-party">Create Party</a>
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
}


const mapStateToProps = state => ({
    partyList: state.partyList.parties
})
  
const mapDispatchToProps = dispatch => ({
    onJoinClicked: (e) => dispatch(onJoinClicked(e.target.getAttribute("data-index"))),
    fetchPartiesAction: () => dispatch(fetchPartiesAction())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(PartyList)