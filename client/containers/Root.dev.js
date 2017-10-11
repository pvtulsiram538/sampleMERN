import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import App from '../components/App';
import DevTools from './DevTools';
import ReduxToastr from 'react-redux-toastr'
export default function Root({store}) {
    return (
            <Provider store={store}>
                <div>
                    <BrowserRouter>
                    <App />
                    </BrowserRouter>
                    <DevTools />
                    <ReduxToastr
      preventDuplicates              
      newestOnTop={true}
      position="top-right"
      transitionIn="bounceIn"
      transitionOut="bounceOut"
      progressBar/>
                </div>
            </Provider>
            );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
