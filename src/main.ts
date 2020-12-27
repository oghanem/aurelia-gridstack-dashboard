import { Aurelia, PLATFORM } from 'aurelia-framework';
import { DashboardView } from './dashboard-view';
import { GridStackAttributes } from './gridstack-attributes';

export async function configure(aurelia: Aurelia): Promise<void> {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .globalResources([
      PLATFORM.moduleName('widgets/todo'),
      PLATFORM.moduleName('widgets/textblock'),
      ...GridStackAttributes,
      DashboardView
    ])
    .plugin(PLATFORM.moduleName('aurelia-animator-css'));
    
  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('app'));
}
