const setsNumberOptions = [1, 2, 3, 4, 5]
const repetitionsNumberOption = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

export const exerciseFields = [
  {
    name: 'weight',
    label: 'Weight [kg]',
    type: 'number',
    required: true
  },
  {
    name: 'sets',
    label: 'Number of sets',
    type: 'select',
    options: setsNumberOptions,
    required: true
  },
  {
    name: 'repetitions',
    label: 'Number of repetitions',
    type: 'select',
    options: repetitionsNumberOption,
    required: true
  }
]

export default exerciseFields
