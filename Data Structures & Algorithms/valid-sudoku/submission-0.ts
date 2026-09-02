class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        for(let row = 0; row < 9; row++) {
            let seen = new Set()
            for(let i = 0; i < 9; i++) {
                if(board[row][i] == ".") continue
                if(seen.has(board[row][i])) return false
                seen.add(board[row][i])
            }
        }

        for(let col = 0; col < 9; col++) {
            let seen = new Set()
            for(let i = 0; i < 9; i++) {
                if(board[i][col] == ".") continue
                if(seen.has(board[i][col])) return false
                seen.add(board[i][col])
            }
        }

        for(let square = 0; square < 9; square++) {
            let seen = new Set()
            const boxRow = Math.floor(square / 3)
            const boxCol = (square % 3)

            const startingRow = boxRow * 3
            const startingCol = boxCol * 3

            for(let i = 0; i < 3; i++) {
                for(let j = 0; j < 3; j++) {
                    const row = startingRow + i
                    const col = startingCol + j

                    if(board[row][col] === ".") continue
                    if(seen.has(board[row][col])) return false
                    seen.add(board[row][col])
                }
            }
        }

        return true
    }
}
