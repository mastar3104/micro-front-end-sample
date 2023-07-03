import React from 'react';
import ReactDOM from 'react-dom';
import { App } from "../components/App";

window.renderMain = (containerId) => {
    ReactDOM.render(<App history={history} />, document.getElementById(containerId));
}