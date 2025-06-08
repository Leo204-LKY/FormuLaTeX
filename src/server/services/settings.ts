import type { AppSettingsConfig } from '../../shared/interfaces';
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
export function getAppSetting<K extends keyof AppSettingsConfig>(
  settingName: K
): AppSettingsConfig[K] | undefined;

/**
 * Get app setting
 * @param settingName The name of the setting to retrieve
 * @param defaultValue The default value to return if the setting does not exist
 * @returns The value of the setting or defaultValue if it does not exist
 */
export function getAppSetting<K extends keyof AppSettingsConfig>(
  settingName: K,
  defaultValue: NonNullable<AppSettingsConfig[K]>
): NonNullable<AppSettingsConfig[K]>;

// Main function to get the app setting
export function getAppSetting<K extends keyof AppSettingsConfig>(
  settingName: K,
  defaultValue?: AppSettingsConfig[K]
): AppSettingsConfig[K] | undefined {
  if (!isConfigExist(APP_SETTINGS_CONFIG_NAME)) {
    return defaultValue;
  } else {
    const appSettings = getEncryptedJsonConfig(
      APP_SETTINGS_CONFIG_NAME
    ) as AppSettingsConfig;

    return appSettings[settingName] !== undefined
      ? appSettings[settingName]
      : defaultValue;
  }
}

/**
 * Save app setting
 * @param settingsName The name of the setting to save
 * @param value The value to save for the setting
 */
export function saveAppSetting<K extends keyof AppSettingsConfig>(
  settingName: K,
  value: AppSettingsConfig[K]
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
