import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as footerActions from '../actions/footerActions'

class Footer extends Component {
    componentDidMount() {
        this.props.footerActions.getVersion()
        this.props.footerActions.getSupportEmail()
        this.props.footerActions.getWikiUrl()
    }

    render() {
        return (
            <footer>
                <span>{this.props.version}</span>

                <span className="float-right">
                    <a href={`mailto:${this.props.supportEmail}?Subject=GPX Support`} target="_top">Support</a>
                    <span style={{ color: '#ddd' }}> | </span>
                    <a href={this.props.wikiUrl} rel="noopener noreferrer" target="_blank">Wiki</a>
                </span>
            </footer>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        version: state.footer.version,
        supportEmail: state.footer.supportEmail,
        wikiUrl: state.footer.wikiUrl
    };
}

function mapDispatchToProps(dispatch) {
    return {
        footerActions: bindActionCreators(footerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
