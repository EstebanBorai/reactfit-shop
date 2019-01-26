import { combineReducers } from 'redux';
import app from './app';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({ app, form: formReducer });
