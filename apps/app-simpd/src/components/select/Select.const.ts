
export const BASE_SELECT_STYLES: any = {
  container: (baseStyles: any, state: any) => ({
    ...baseStyles,
    width: '100%',
  }),
  control: (baseStyles: any, state: any) => ({
    ...baseStyles,
    borderColor: state.isFocused ? 'grey' : 'red',
  }),
}
