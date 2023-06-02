
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/overlayscrollbars.css'
import React from 'react';
import { cn } from '~ui';



type ScrollbarProps = {
  options?: any;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  className?: string;
};

export const Scrollbar: React.FC<ScrollbarProps> = ({
  options,
  className,
  style,
  ...props
}) => {
  return (
    <OverlayScrollbarsComponent
      options={{
        className: cn('os-theme-thin-dark', className),
        scrollbars: {
          autoHide: 'scroll',
        },
        ...(options ? options : {}),
      }}
      style={style}
      {...props}
    />
  );
};
