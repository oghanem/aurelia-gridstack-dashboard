import { Aurelia, PLATFORM } from 'aurelia-framework';

export async function configure(aurelia: Aurelia): Promise<void> {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .globalResources([
      PLATFORM.moduleName('widgets/articles'),
      PLATFORM.moduleName('widgets/textblock')
    ])
    .plugin(PLATFORM.moduleName('aurelia-animator-css'));
    
  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('app'));
}
