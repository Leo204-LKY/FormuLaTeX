/**
 * SimpleTex API response interface
 * Contains necessary data of a SimpleTex response
 */
export interface SimpleTexResponse {
  /**
   * LaTeX code of a recognized image
   * @example "E=mc^{2}"
   */
  latex: string;

  /**
   * The confidence of the formula
   * @example 0.9272882342338562
   */
  confidence?: number;

  /**
   * ID of this request
   * @example "tr_xxxxxxxxxx"
   */
  requestId?: string;
}
