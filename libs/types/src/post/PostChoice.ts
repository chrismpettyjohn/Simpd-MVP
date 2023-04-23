export interface PostChoiceWire {
  id: number;
  value: string;
  label: string;
  order: number;
  isCorrect?: boolean;
}

export interface PostChoiceWithIndicatorWire extends PostChoiceWire {
  isCorrect: boolean;
}

export const examplePostChoiceWire: PostChoiceWire = {
  id: 1,
  value: 'dogs',
  label: 'Dogs',
  order: 1,
  isCorrect: undefined,
};
