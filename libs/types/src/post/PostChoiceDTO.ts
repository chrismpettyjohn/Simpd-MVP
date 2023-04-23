export interface PostChoiceDTOWire {
  id?: number;
  value: string;
  label: string;
  order: number;
  isCorrect?: boolean;
}

export interface PostChoiceWithIndicatorDTOWire extends PostChoiceDTOWire {
  isCorrect: boolean;
}

export const examplePostChoiceDTOWire: PostChoiceDTOWire = {
  id: 1,
  value: 'dogs',
  label: 'Dogs',
  order: 1,
  isCorrect: undefined,
};
