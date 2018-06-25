import React, { Component } from 'react';
import Routes from './infrastructure/routes';
import Loader from './components/loader';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import './styles/site.css';
import { withRouter } from 'react-router-dom';
import * as filterActions from './actions/staff/filterActions'
import * as footerActions from './actions/footerActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class App extends Component {
    componentDidMount() {
        this.props.filterActions.getSourceMarkets()
        this.props.footerActions.getVersion()
        this.props.footerActions.getSupportEmail()
        this.props.footerActions.getWikiUrl()
    }

    matchRuleShort(str, rule) {
        return new RegExp("^" + rule.split("*").join(".*") + "$").test(str);
    }

    render() {
        const HeaderWithRouter = withRouter(props => {
            //Hide navbar if staff edit
            if (!this.matchRuleShort(props.location.pathname, "/staff/*")) {
                return <Header
                    staffTabs={this.props.staffTabs}
                    route={props.location.pathname}
                />
            }
            else {
                return '';
            }
        }
        );

        return (
            <BrowserRouter>
                <div className="App">
                    <Loader />

                    <ReduxToastr
                        timeOut={5000}
                        newestOnTop={false}
                        preventDuplicates={false}
                        position="bottom-right"
                        transitionIn="fadeIn"
                        transitionOut="fadeOut"
                        progressBar
                    />

                    <HeaderWithRouter />

                    <Routes />

                    <Footer
                        version={this.props.version}
                        supportEmail={this.props.supportEmail}
                        wikiUrl={this.props.wikiUrl}
                    />
                </div>
            </BrowserRouter>
        );
    }
}

function mapStateToProps(state) {
    return {
        version: state.footer.version,
        supportEmail: state.footer.supportEmail,
        wikiUrl: state.footer.wikiUrl
    };
}

function mapDispatchToProps(dispatch) {
    return {
        filterActions: bindActionCreators(filterActions, dispatch),
        footerActions: bindActionCreators(footerActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)