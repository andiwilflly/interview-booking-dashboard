import React from "react";
import styles from './App.module.scss';
// Components
import Router from "components/Router";


export default class App extends React.Component {
    render() {
        return (
            <div className={styles.app}>
                 <Router />
            </div>
        );
    }
}
