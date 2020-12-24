import { GridStackElement } from "gridstack";

export class Textblock {
  heading: any;
  content: any;
  removeWidget: any;
  domEl: GridStackElement;

  activate(model: any) {

    this.heading = 'Textblock Widget';
    this.content = model.content;
    this.removeWidget = model.removeWidget;
  }
}