'use client'

import React from 'react'
import { decrement, increment } from '../lib/features/counter/counterSlice'
import { Fragment } from 'react'
import { useDispatch } from 'react-redux'

export default function Buttons() {
  const dispatch = useDispatch()

  return (
    <Fragment>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </Fragment>
  )
}
