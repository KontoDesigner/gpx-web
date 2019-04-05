import React, { Component } from 'react'
import Routes from './infrastructure/routes'
import Loader from './components/loader'
import Header from './components/header'
import Footer from './components/footer'
import { BrowserRouter } from 'react-router-dom'
import ReduxToastr from 'react-redux-toastr'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import './styles/site.css'
import { withRouter } from 'react-router-dom'
import * as geographyActions from './actions/geographyActions'
import * as settingActions from './actions/setting/settingActions'
import * as keywordsActions from './actions/setting/keywordsActions'
import * as footerActions from './actions/footerActions'
import * as userActions from './actions/userActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { UserRoles as userRoles } from './constants/userConstants'
import { LicenseManager } from 'ag-grid-enterprise'

LicenseManager.setLicenseKey('TUI_Nordic__TPP_1Devs6_March_2020__MTU4MzQ1MjgwMDAwMA==76d945771851586658d23f986e58136d')

class App extends Component {
    constructor() {
        super()

        this.state = {
            loaded: false
        }
    }

    async componentWillMount() {
        const _this = this

        return Promise.all([
            this.props.geographyActions.getSourceMarkets(),
            this.props.settingActions.getJobFamilies(),
            this.props.settingActions.getAllJobTitle(),
            this.props.keywordsActions.getKeywordsLookup(),
            
            this.props.geographyActions.getSeasons(),
            this.props.footerActions.getVersion(),
            this.props.footerActions.getSupportEmail(),
            this.props.footerActions.getWikiUrl(),
            this.props.userActions.getUser()
        ]).then(function() {
            //EXEMPEL ROLECHECK
            //const HR = this.props.userRoles.includes(userRoles.DS_F2W_HR_Team)
            _this.setState({ loaded: true })
        })
    }

    matchRuleShort(str, rule) {
        return new RegExp('^' + rule.split('*').join('.*') + '$').test(str)
    }

    render() {
        const HeaderWithRouter = withRouter(props => {
            //Hide navbar if staff edit
            if (!this.matchRuleShort(props.location.pathname, '/staff/*')) {
                return <Header staffTabs={this.props.staffTabs} route={props.location.pathname} />
            } else {
                return ''
            }
        })

        return (
            <BrowserRouter>
                <div className="App">
                    <Loader />

                    <ReduxToastr
                        timeOut={4000}
                        newestOnTop={false}
                        preventDuplicates={false}
                        position="bottom-right"
                        transitionIn="fadeIn"
                        transitionOut="fadeOut"
                        progressBar
                    />
                    {this.state.loaded === true
                        ? [
                              <HeaderWithRouter key={0} />,

                              <Routes key={1} />,

                              <Footer key={2} version={this.props.version} supportEmail={this.props.supportEmail} wikiUrl={this.props.wikiUrl} />
                          ]
                        : ''}
                </div>
            </BrowserRouter>
        )
    }
}

function mapStateToProps(state) {
    return {
        version: state.footer.version,
        supportEmail: state.footer.supportEmail,
        wikiUrl: state.footer.wikiUrl
    }
}

function mapDispatchToProps(dispatch) {
    return {
        geographyActions: bindActionCreators(geographyActions, dispatch),
        settingActions: bindActionCreators(settingActions, dispatch),
        keywordsActions: bindActionCreators(keywordsActions, dispatch),
        footerActions: bindActionCreators(footerActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
