// Common type definitions

export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}
