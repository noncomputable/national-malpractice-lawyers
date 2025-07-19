import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

declare module 'next' {
  interface PageProps {
    children?: React.ReactNode;
  }
} 