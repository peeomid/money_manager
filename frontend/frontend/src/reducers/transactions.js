import {
  ADD_TRANSACTION,
  UPDATE_TRANSACTION,
  DELETE_TRANSACTION
} from "../constants/action-types";

const initialState = {
  transactions: [
    { id: 1, type: 1, description: 'A Tech project', date: '2020/04/01', amount: 20000, category: 1 },
    { id: 2, type: 0, description: '2020 March Employee Salary', date: '2020/04/01', amount: 2000, category: 2 },
  ]
};

export const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      console.log('in add');
      return Object.assign({}, state, {
        transactions: state.transactions.concat(action.payload)
      });
    case 'TRANSACTION_UPDATE':
      return {};
    case 'TRANSACTION_REMOVE':
      return {};
    default:
      return state;
  }
}