// src/eventBus.ts
import mitt from 'mitt';

type Events = {
  selectExpression: string;
};

export const eventBus = mitt<Events>();
