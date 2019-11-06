import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';
import {Login, Map, MyPage, Search, ServiceCenter, TimeTable, Start} from './screens';
import {Header, Footer} from './components';

function App() {
  const style= {
    header: {
      position: 'fixed',
      width: '100%',
      top: 0,
      backgroundColor: 'white'
    },
    main: {
      marginTop: '87px'
    }
  };
  return (
    <div>
      <header style={style.header}>
        <Header />
      </header>
      <section style={style.main}>
        <Switch>
          <Route exact path='/'>
            <Start />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Map">
            <Map />
          </Route>
          <Route path="/MyPage">
            <MyPage />
          </Route>
          <Route path="/Search">
            <Search />
          </Route>
          <Route path="/ServiceCenter">
            <ServiceCenter />
          </Route>
          <Route path="/TimeTable">
            <TimeTable />
          </Route>
        </Switch>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
