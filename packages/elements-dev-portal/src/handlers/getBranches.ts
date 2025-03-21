import { Branches } from '../types';
import { appVersion } from '../version';

export const getBranches = async ({
  projectId,
  platformUrl = 'https://swaggermen.io',
  platformAuthToken,
}: {
  projectId: string;
  platformUrl?: string;
  platformAuthToken?: string;
}): Promise<Branches> => {
  const encodedProjectId = encodeURIComponent(projectId);
  const response = await fetch(`${platformUrl}/api/v1/projects/${encodedProjectId}/branches`, {
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
