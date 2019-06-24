import { put, call } from 'redux-saga/effects'
import { incrementAsync, delay } from '.'

const gen = incrementAsync()
test('incrementAsync Saga must call delay(1000)', () => {
  gen.next().value.then( (value: Promise<any>) => {
    expect(value).toEqual(call(delay, 1000))
  })
  }
)

test('incrementAsync Saga must dispatch an INCREMENT action', () => {
  expect(gen.next().value).toEqual(put({type: 'INCREMENT'}))
})

test('incrementAsync Saga must be done', () => {
  expect(gen.next()).toEqual(
    {
      done: true,
      value: undefined
    }
  )
});
