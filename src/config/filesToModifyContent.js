// nS - No Space
// lC - Lowercase

export function filesToModifyContent(currentAppName, newName, newProjectName) {
  const nS_CurrentAppName = currentAppName.replace(/\s/g, '');
  const nS_NewName = newName.replace(/\s/g, '');
  const nS_NewProjectName = newProjectName.replace(/\s/g, '');

  return [
    {
      regex: `<string name="app_name">${currentAppName}</string>`,
      replacement: `<string name="app_name">${newName}</string>`,
      paths: ['android/app/src/main/res/values/strings.xml'],
    },
    {
      regex: nS_CurrentAppName,
      replacement: nS_NewProjectName,
      paths: [
        'index.js',
        'index.android.js',
        'index.ios.js',
        `ios/${nS_NewProjectName}.xcodeproj/project.pbxproj`,
        `ios/${nS_NewProjectName}.xcworkspace/contents.xcworkspacedata`,
        `ios/${nS_NewProjectName}.xcodeproj/xcshareddata/xcschemes/${nS_NewName}-tvOS.xcscheme`,
        `ios/${nS_NewProjectName}.xcodeproj/xcshareddata/xcschemes/${nS_NewName}.xcscheme`,
        `ios/${nS_NewProjectName}/AppDelegate.m`,
        'android/settings.gradle',
        `ios/${nS_NewProjectName}Tests/${nS_NewProjectName}Tests.m`,
        'ios/build/info.plist',
        'ios/Podfile',
        'app.json',
      ],
    },
    {
      regex: `text="${currentAppName}"`,
      replacement: `text="${newProjectName}"`,
      paths: [`ios/${nS_NewProjectName}/Base.lproj/LaunchScreen.xib`],
    },
    {
      regex: currentAppName,
      replacement: newProjectName,
      paths: [`ios/${nS_NewProjectName}/Info.plist`],
    },
    {
      regex: `"name": "${nS_CurrentAppName}"`,
      replacement: `"name": "${nS_NewProjectName}"`,
      paths: ['package.json'],
    },
    {
      regex: `"displayName": "${currentAppName}"`,
      replacement: `"displayName": "${newName}"`,
      paths: ['app.json'],
    },
  ];
}
