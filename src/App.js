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
    render() {
        const HeaderWithRouter = withRouter(props =>
            <Header
                staffTabs={this.props.staffTabs}
                route={props.location.pathname}
            />
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