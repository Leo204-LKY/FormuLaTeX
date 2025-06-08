/**
 * SimpleTex API config
 */
export interface SimpleTexConfig {
  /**
   * App key
   */
  appId?: string;

  /**
   * App secret
   */
  appSecret?: string;
}

/**
 * DeepSeek API config
 */
export interface DeepSeekConfig {
  /**
   * API key
   */
  apiKey?: string;
}

/**
 * App settings config
 */
export type AppSettingsConfig = {
  /**
   * Language for the app
   */
  language?: string;

  /**
   * Is first launch of the app
   */
  isFirstLaunch?: boolean;
};
