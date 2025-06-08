export function onContextMenu(event: MouseEvent) {
  event.preventDefault();
  const target = event.target as HTMLElement;
  const isInput =
    target.tagName === 'INPUT' ||
    target.tagName === 'TEXTAREA' ||
    (target as HTMLElement).isContentEditable;
  const selectedText = window.getSelection()?.toString() ?? '';
  window.utilsApi.showContextMenu({
    selectedText,
    hasSelection: selectedText.length > 0,
    isInput: isInput,
  });
}
