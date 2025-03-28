{/* @ts-expect-error */}
import { IMarkdownViewerProps } from '@stoplight/markdown-viewer';
import { Box } from '@stoplight/mosaic';
import { ErrorBoundaryProps, withErrorBoundary } from '@stoplight/react-error-boundary';
import * as React from 'react';
import { useLocation } from 'react-router-dom';

import { useRouterType } from '../../../context/RouterType';
import { MarkdownViewer } from '../../MarkdownViewer';
import { DocsComponentProps } from '..';

type ArticleProps = DocsComponentProps<IMarkdownViewerProps['markdown']>;

const ArticleComponentForHashRouter = React.memo<ArticleProps>(({ data }) => {
  const { pathname } = useLocation();
  const basePath = `#${pathname.split('#')[0]}`;

  return <BaseArticleComponent data={data} tocBasePath={basePath} />;
});

const BaseArticleComponent = React.memo<ArticleProps & { tocBasePath?: string }>(({ data, ...props }) => {
  return (
    <Box className="sl-swaggermen-article">
      <MarkdownViewer className="sl-swaggermen-article-content" markdown={data} includeToc {...props} />
    </Box>
  );
});

const ArticleComponent = React.memo<ArticleProps>(({ data }) => {
  const routerKind = useRouterType();

  if (routerKind === 'hash') {
    return <ArticleComponentForHashRouter data={data} />;
  }

  return <BaseArticleComponent data={data} />;
});

{/* @ts-expect-error */}
export const Article: React.FunctionComponent<ArticleProps & ErrorBoundaryProps<{}>> = withErrorBoundary<ArticleProps>(ArticleComponent, { recoverableProps: ['data'] });
