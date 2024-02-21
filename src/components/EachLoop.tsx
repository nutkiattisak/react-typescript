import { Children, ReactElement } from 'react'

interface EachProps<T> {
  render: (item: T, index: number) => ReactElement
  of: T[]
}

export const EachLoop = <T,>({ render, of }: EachProps<T>) =>
  Children.toArray(of.map((item, index) => render(item, index)))
