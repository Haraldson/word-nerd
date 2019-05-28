const shuffle = array => array
  .map(a => [Math.random(), a])
  .sort((a, b) => a[0] - b[0])
  .map(a => a[1])

export const generate = () => {
    const boardSize = 15

    let tiles = [
        ...new Array(9).fill({ type: 'tw' }),
        ...new Array(12).fill({ type: 'dw' }),
        ...new Array(18).fill({ type: 'tl' }),
        ...new Array(24).fill({ type: 'dl' })
    ]

    const blankCount = (boardSize * boardSize) - tiles.length
    tiles = shuffle([ ...tiles, ...new Array(blankCount).fill({ type: 'blank' }) ])

    return new Array(boardSize)
        .fill(0)
        .map(() => (
            new Array(boardSize)
                .fill(0)
                .map(() => ({ ...tiles.pop() }))
        ))
}
