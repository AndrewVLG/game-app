import { useEffect, useState, RefObject } from 'react'
import {
  fromEvent,
  map,
  switchMap,
  tap,
  takeUntil,
  finalize,
  filter,
  take,
} from 'rxjs'

import { useAppDispatch } from '../../app/redux/store'
import { moveCard, setPick, setTarget } from '../../app/redux/cardsSlice'

export const useCardMove = (ref: RefObject<HTMLDivElement>, isWin: boolean): number => {
  const [isEnabled, setEnabled] = useState(false)
  const [pos, setPos] = useState<number>(0)

  const dispatch = useAppDispatch()

  useEffect(() => {
    const click = fromEvent(ref.current as HTMLDivElement, 'click')
    const moves = fromEvent(document, 'mousemove')
    if (!isEnabled) {
      click
        .pipe(
          filter((e) =>
            (e.target as HTMLImageElement).hasAttribute('data-code') && !isWin
          ),
          take(1),
          tap((e) => {
            setEnabled(true)
            const code = (e.target as HTMLImageElement).getAttribute(
              'data-code'
            ) as string
            dispatch(setPick(code))
          }),
          map((e) => {
            const { width, x } = (
              e.target as HTMLElement
            ).getBoundingClientRect()
            return { x, width }
          }),
          switchMap((clickTarget) =>
            moves.pipe(
              tap((e: Event) => {
                if ((e.target as HTMLImageElement).hasAttribute('data-code')) {
                  dispatch(
                    setTarget(
                      (e.target as HTMLImageElement).getAttribute(
                        'data-code'
                      ) as string
                    )
                  )
                }
              }),
              map((e: any) => {
                return e.clientX - clickTarget.x + clickTarget.width / 5
              }),
              takeUntil(click)
            )
          ),
          finalize(() => {
            setEnabled(false)
            dispatch(moveCard())
            setPos(0)
          })
        )
        .subscribe((value) => setPos(value))
    }
  }, [isEnabled, dispatch, isWin])

  return pos
}
