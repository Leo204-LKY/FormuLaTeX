import { getI18n } from './locales';

export function onContextMenu(event: MouseEvent) {
  event.preventDefault();

  getI18n().then((i18n) => {
    const t =
      typeof i18n.global.t === 'function'
        ? i18n.global.t.bind(i18n.global)
        : () => '';

    const target = event.target as HTMLElement;
    const isInput =
      target.tagName === 'INPUT' ||
      target.tagName === 'TEXTAREA' ||
      (target as HTMLElement).isContentEditable;
    const selectedText = window.getSelection()?.toString() ?? '';
    window.utilsApi.showContextMenu(
      {
        selectedText,
        hasSelection: selectedText.length > 0,
        isInput: isInput,
      },
      {
        cut: t('contextMenu.cut'),
        copy: t('contextMenu.copy'),
        paste: t('contextMenu.paste'),
        selectAll: t('contextMenu.selectAll'),
      }
    );
  });
}
