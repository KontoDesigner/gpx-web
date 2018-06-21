import React, { Component } from 'react';
import Routes from './infrastructure/routes';
import Loader from './components/loader';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import './styles/site.css';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class App extends Component {
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

                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

function mapStateToProps(state) {
    return {
        staffTabs: state.staff.tabs
    }
}

export default connect(
    mapStateToProps
)(App)