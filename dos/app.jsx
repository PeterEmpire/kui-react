import React from 'react'
import Render from 'react-dom'
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";


//style
// import '../src/styles';

import Index from './page/index'
import Layout from './layout'
import routers from './router'

import './assets/demo'

// import theme from './page/theme'
// import log from './page/log'
const Main = () => {
    const routes = () => (
        Object.keys(routers).map(route => {
            return (<Route path={`/${route}`} component={routers[route]} key={route} />)
        })
    )
    return <Router>
        <Switch>
            <Route path="/" exact component={Index} />
            <Route render={({ location }) => (
                <Layout>
                    <div style={{ position: 'relative', width: '100%',height:'100%' }}>
                        <TransitionGroup >
                            <CSSTransition timeout={800} classNames="fade" key={location.key}>
                                <div style={{ position: 'absolute', top: 0 ,width:'100%'}}>
                                    <Switch location={location}>
                                        {routes()}
                                        {/* <Route path="/log" component={log} />
                                        <Route path="/theme" component={theme} /> */}
                                    </Switch>
                                </div>
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                </Layout>
            )} />
        </Switch>
    </Router>
}
Render.render(<Main />, document.getElementById('app')
)


