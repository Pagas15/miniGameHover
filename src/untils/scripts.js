export const mathRow = (index, stateMode) => Math.ceil((index + 1) / stateMode);
export const mathCol = (index, stateMode) => (index % stateMode) + 1;
export const mathGen = () => Boolean(Math.round(Math.random()));
