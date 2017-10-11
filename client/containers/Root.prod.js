import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter,HashRouter  } from 'react-router-dom'
import ReduxToastr from 'react-redux-toastr'
import App from '../components/App';

export default function Root({store}) {
    return (
        <Provider store={store}>
            <div>
                <HashRouter>
                    <App/>
                </HashRouter>
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
