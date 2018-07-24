import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from '../src/DevTools';
import {getCountries} from '.src/actions/action-countries'

render(
    <Provider store={store}>
    	<div>
			<h1>Inicjalizacja projektu</h1>
        	<DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries('Countries'))