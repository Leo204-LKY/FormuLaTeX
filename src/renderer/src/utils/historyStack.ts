import { ref } from 'vue';
import type { Ref } from 'vue';

export class HistoryManager {
  private undoStack: Ref<string[]> = ref([]);
  private redoStack: Ref<string[]> = ref([]);
  private _currentState = ref('');

  constructor(initialState: string) {
    this._currentState.value = initialState;
    this.undoStack.value.push(initialState);
  }

  saveState(newState: string) {
    if (
      this.undoStack.value.length === 0 ||
      this.undoStack.value[this.undoStack.value.length - 1] !== newState
    ) {
      this.undoStack.value.push(newState);
    }
    this._currentState.value = newState;
    this.redoStack.value = [];
  }

  undo(): string {
    if (this.undoStack.value.length > 1) {
      const last = this.undoStack.value.pop();
      if (last !== undefined) {
        this.redoStack.value.push(this._currentState.value);
        this._currentState.value =
          this.undoStack.value[this.undoStack.value.length - 1];
      }
    }
    return this._currentState.value;
  }

  redo(): string {
    if (this.redoStack.value.length > 0) {
      const next = this.redoStack.value.pop()!;
      this.undoStack.value.push(next);
      this._currentState.value = next;
    }
    return this._currentState.value;
  }

  reset(newState: string = ''): void {
    this.undoStack.value = [newState];
    this.redoStack.value = [];
    this._currentState.value = newState;
  }

  getCurrentState(): string {
    return this._currentState.value;
  }

  canUndo(): boolean {
    return this.undoStack.value.length > 1;
  }

  canRedo(): boolean {
    return this.redoStack.value.length > 0;
  }

  getUndoStack() {
    return this.undoStack;
  }

  getRedoStack() {
    return this.redoStack;
  }
}
