import { GridStackElement, GridStackWidget } from "gridstack";

export class Textblock {
  heading: any;
  content: any;
  removeWidget: any;
  domEl: GridStackElement;

  activate(model: any) {
    this.content = model.widgetDetail.content;
    this.removeWidget = model.removeWidget;
    this.heading = 'Textblock';
  }
}