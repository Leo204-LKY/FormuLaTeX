export interface TourStep {
  target: string;
  content?: string;
  params?: Record<string, unknown>;
  placement?: string;
}
