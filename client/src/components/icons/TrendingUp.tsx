import React from 'react';

function TrendingUpIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" fill="#15803d" className={className} {...(props as any)}><path d="M22.5,6h-7.5v1h7.293l-9.293,9.293-6-6L.026,17.267l.707,.707,6.267-6.267,6,6L23,7.707v7.293h1V7.5c0-.827-.673-1.5-1.5-1.5Z"/></svg>
  );
}

export default TrendingUpIcon;