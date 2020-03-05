import { 
  ADD_TRANSACTION,
  UPDATE_TRANSACTION,
  DELETE_TRANSACTION
 } from "../constants/action-types";

export const addTransaction = (payload) => ({
  type: ADD_TRANSACTION,
  payload
});

export const updateTransaction = (payload) => ({
  type: UPDATE_TRANSACTION,
  payload
});

export const removeTransaction = (payload) => ({
  type: DELETE_TRANSACTION,
  payload
});