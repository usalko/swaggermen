import * as React from 'react';

type SwaggermenNode = 'docs';

const SwaggermenBreakpoints: Record<SwaggermenNode, number> = {
  docs: 700,
};

export enum ScreenType {
  Phone = 415,
  Tablet = 750,
  Resized_Browser = 980,
  Normal_Browser = 1_000_000,
}

const getScreenType = () => {
  if (window?.innerWidth <= ScreenType.Phone) {
    return ScreenType.Phone;
  } else if (window?.innerWidth <= ScreenType.Tablet) {
    return ScreenType.Tablet;
  } else if (window?.innerWidth <= ScreenType.Resized_Browser) {
    return ScreenType.Resized_Browser;
  }
  return ScreenType.Normal_Browser;
};

export const useResponsiveLayout = () => {
  const [screenType, setScreenType] = React.useState<ScreenType | undefined>();

  const getSwaggermenBreakpoint = (node: SwaggermenNode) => {
    return SwaggermenBreakpoints[node];
  };

  React.useLayoutEffect(() => {
    function handleResize() {
      setScreenType(getScreenType());
    }
    window?.addEventListener('resize', handleResize);
    handleResize();
    return () => window?.removeEventListener('resize', handleResize);
  }, []);

  // isResponsiveLayoutEnabled can be applied to generally trigger responsive layout behavior
  const isResponsiveLayoutEnabled = screenType !== ScreenType.Normal_Browser;

  return {
    isResponsiveLayoutEnabled,
    screenType,
    getSwaggermenBreakpoint,
  };
};
