// nS - No Space
// lC - Lowercase

export function foldersAndFiles(currentAppName, newProjectName) {
  const nS_CurrentAppName = currentAppName.replace(/\s/g, '');
  const nS_NewProjectName = newProjectName.replace(/\s/g, '');

  return [
    `ios/${nS_CurrentAppName}`,
    `ios/${nS_CurrentAppName}-tvOS`,
    `ios/${nS_CurrentAppName}-tvOSTests`,
    `ios/${nS_CurrentAppName}.xcodeproj`,
    `ios/${nS_NewProjectName}.xcodeproj/xcshareddata/xcschemes/${nS_CurrentAppName}-tvOS.xcscheme`,
    `ios/${nS_NewProjectName}.xcodeproj/xcshareddata/xcschemes/${nS_CurrentAppName}.xcscheme`,
    `ios/${nS_CurrentAppName}Tests`,
    `ios/${nS_NewProjectName}Tests/${nS_CurrentAppName}Tests.m`,
    `ios/${nS_CurrentAppName}.xcworkspace`,
    `ios/${nS_NewProjectName}/${nS_CurrentAppName}.entitlements`,
  ];
}
