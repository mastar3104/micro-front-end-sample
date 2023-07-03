import App from '../components/App.svelte';

window.renderModule2 = (containerId) => {
    new App({
        target: document.getElementById(containerId),
    });
}