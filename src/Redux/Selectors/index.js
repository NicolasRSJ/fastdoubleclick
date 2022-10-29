const selectCounterValue = state => state.value;

export const currentValue = selectCounterValue(store.getState());