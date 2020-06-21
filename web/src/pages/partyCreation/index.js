import './style.scss'
import { connect } from 'react-redux'
import { onPartyNameChanged, onPeopleChanged } from '../../redux/actions/partyCreationAction'

import React from 'react';

const Login = ({ 
    onPartyNameChanged, 
    onPeopleChanged,
    partyName, 
    people
}) => {
    return (
        <div id="login-container">
            <form>
                <label>Party name</label>
                <input type="text" onChange={onPartyNameChanged} value={partyName} required></input>
                <label>People</label>
                <input type="number" onChange={onPeopleChanged} value={people} required></input>
                <button 
                    type="submit" 
                    disabled={!partyName || !people}>
                        Create Party
                </button>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    partyName: state.login.partyName,
    people: state.login.people
})
  
const mapDispatchToProps = dispatch => ({
    onPartyNameChanged: (e) => dispatch(onPartyNameChanged(e.target.value)),
    onPeopleChanged: (e) => dispatch(onPeopleChanged(e.target.value))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Login)