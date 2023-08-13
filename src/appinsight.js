import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';
import { createBrowserHistory } from "history";
const browserHistory = createBrowserHistory({ basename: '' });
var reactPlugin = new ReactPlugin();

var appInsights = new ApplicationInsights({
    config: {
        instrumentationKey: 'f5fb3703-4f38-476b-a253-8ceccbdd4388',
        extensions: [reactPlugin],
        extensionConfig: {
            [reactPlugin.identifier]: { history: browserHistory }
        }
    }
});

appInsights.loadAppInsights();

export { appInsights };
