// // src/sagas.js
// import { put, takeLatest, all } from 'redux-saga/effects';
// import axios from 'axios';
// import { setTodos, addTodo, fetchTodos } from './features/todoSlice';

// function* fetchTodosAsync() {
//   try {
//     const response = yield axios.get('http://localhost:5000/todos');
//     yield put(setTodos(response.data));
//   } catch (error) {
//     console.error('Error fetching todos:', error);
//   }
// }

// function* addTodoAsync(action) {
//   try {
//     const response = yield axios.post('http://localhost:5000/todos', action.payload);
//     yield put(addTodo(response.data.ops[0])); // Assuming the response structure from MongoDB
//   } catch (error) {
//     console.error('Error adding todo:', error);
//   }
// }

// function* watchFetchTodos() {
//   yield takeLatest(fetchTodos.type, fetchTodosAsync);
// }

// function* watchAddTodo() {
//   yield takeLatest('todos/addTodo', addTodoAsync);
// }

// export default function* rootSaga() {
//   yield all([
//     watchFetchTodos(),
//     watchAddTodo(),
//   ]);
// }
// sagas.js
import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { addTodo, setTodos } from './features/todoSlice';

function* fetchTodos() {
  const todos = yield call(() => axios.get('/todos').then((res) => res.data));
  yield put(setTodos(todos));
}

function* addTodoSaga(action) {
  const newTodo = yield call(() => axios.post('/todos', action.payload).then((res) => res.data));
  yield put(addTodo(newTodo));
}

function* rootSaga() {
  yield takeLatest('todos/fetchTodos', fetchTodos);
  yield takeLatest('todos/addTodo', addTodoSaga);
}

export default rootSaga;
