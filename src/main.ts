import { Aurelia, PLATFORM } from 'aurelia-framework';
import { GsHCustomAttribute, GsIdCustomAttribute, GsLockedCustomAttribute, GsNoMoveCustomAttribute, GsWCustomAttribute, GsXCustomAttribute, GsYCustomAttribute } from './gridstack-attributes';

export async function configure(aurelia: Aurelia): Promise<void> {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .globalResources([
      PLATFORM.moduleName('widgets/articles'),
      PLATFORM.moduleName('widgets/textblock'),
      GsXCustomAttribute,
      GsYCustomAttribute,
      GsWCustomAttribute,
      GsHCustomAttribute,
      GsIdCustomAttribute,
      GsNoMoveCustomAttribute,
      GsLockedCustomAttribute
    ])
    .plugin(PLATFORM.moduleName('aurelia-animator-css'));
    
  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('app'));
}
