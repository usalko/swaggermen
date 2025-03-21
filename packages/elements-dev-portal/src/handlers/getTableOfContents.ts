import { ProjectTableOfContents } from '../types';
import { appVersion } from '../version';

export const getTableOfContents = async ({
  projectId,
  branchSlug,
  platformUrl = 'https://swaggermen.io',
  platformAuthToken,
}: {
  projectId: string;
  branchSlug?: string;
  platformUrl?: string;
  platformAuthToken?: string;
}): Promise<ProjectTableOfContents> => {
  const encodedProjectId = encodeURIComponent(projectId);
  const encodedBranchSlug = branchSlug ? encodeURIComponent(branchSlug) : '';
  const branchQuery = encodedBranchSlug ? `?branch=${encodedBranchSlug}` : '';
  const response = await fetch(`${platformUrl}/api/v1/projects/${encodedProjectId}/table-of-contents${branchQuery}`, {
    headers: {
      'Swaggermen-Swaggermen-Version': appVersion,
      ...(platformAuthToken && { Authorization: `Bearer ${platformAuthToken}` }),
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }
  return data;
};
