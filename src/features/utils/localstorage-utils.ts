export const loadState = (sectionState: string) => {
  try {
    const serializedState = localStorage.getItem(sectionState);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};