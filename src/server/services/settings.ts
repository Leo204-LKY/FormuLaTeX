import { AppSettingsConfig } from '../interfaces';
import {
  getEncryptedJsonConfig,
  isConfigExist,
  saveEncryptedJsonConfig,
} from './config-service';

const APP_SETTINGS_CONFIG_NAME = 'appSettings';

/**
 * Get app setting
 * @param settingName The name of the setting to retrieve
 * @returns The value of the setting or null if it does not exist
 */
export function getAppSetting(
  settingName: keyof AppSettingsConfig
): string | null {
  if (!isConfigExist(APP_SETTINGS_CONFIG_NAME)) {
    return null;
  } else {
    const appSettings = getEncryptedJsonConfig(
      APP_SETTINGS_CONFIG_NAME
    ) as AppSettingsConfig;

    return appSettings[settingName] ?? null;
  }
}

/**
 * Save app setting
 * @param settingsName The name of the setting to save
 * @param value The value to save for the setting
 */
export function saveAppSetting(
  settingName: keyof AppSettingsConfig,
  value: string
): void {
  if (!isConfigExist(APP_SETTINGS_CONFIG_NAME)) {
    saveEncryptedJsonConfig(APP_SETTINGS_CONFIG_NAME, {
      [settingName]: value,
    } as AppSettingsConfig);
  } else {
    const appSettings = getEncryptedJsonConfig(
      APP_SETTINGS_CONFIG_NAME
    ) as AppSettingsConfig;

    appSettings[settingName] = value;

    saveEncryptedJsonConfig(APP_SETTINGS_CONFIG_NAME, appSettings);
  }
}
