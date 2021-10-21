export function deleteApp(apps, index) {
  
  apps.splice(index, 1);
  return apps;
}
