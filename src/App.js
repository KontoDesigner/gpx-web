import React, { Component } from 'react';
import Routes from './infrastructure/routes';
import Loader from './components/loader';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import './styles/site.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <ReduxToastr
                        timeOut={5000}
                        newestOnTop={false}
                        preventDuplicates={false}
                        position="bottom-right"
                        transitionIn="fadeIn"
                        transitionOut="fadeOut"
                        progressBar
                    />

                    <Loader />

                    <Header />

                    <Routes />

                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App