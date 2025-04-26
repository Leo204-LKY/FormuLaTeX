// src/eventBus.ts
import mitt from 'mitt';

type expressionEvents = {
  selectExpression: string;
};
type symbolEvents = {
  selectSymbol: string;
};

export const selectExpressionEventBus = mitt<expressionEvents>();
export const selectSymbolEventBus = mitt<symbolEvents>();
