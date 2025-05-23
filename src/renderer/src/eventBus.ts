// src/eventBus.ts
import mitt from 'mitt';

type expressionEvents = {
  selectExpression: string;
};
type symbolEvents = {
  selectSymbol: string;
};
type isDrawerOpenEvents = {
  update: boolean;
  expression: string;
};
type inputEvents = {
  input: string;
};

export const selectExpressionEventBus = mitt<expressionEvents>();
export const selectSymbolEventBus = mitt<symbolEvents>();
export const isDrawerOpenEventBus = mitt<isDrawerOpenEvents>();
export const inputEventBus = mitt<inputEvents>();
