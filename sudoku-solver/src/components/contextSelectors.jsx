import { useContext } from 'react';
import SudokuContext from '../SudokuContext.jsx';

const useSelected = () => {
    const { selected } = useContext(SudokuContext);
    return selected;
};

const usePuzzleCell = (g, i, j) => {
    const { puzzle } = useContext(SudokuContext);
    return puzzle[g][i][j];
};

export { useSelected, usePuzzleCell };