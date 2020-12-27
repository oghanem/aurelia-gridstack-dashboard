
import { GridStack, GridStackElement, GridStackNode, GridStackWidget } from "gridstack";
import 'gridstack/dist/h5/gridstack-dd-native';
import { WidgetDetails } from "./widgets/widget-details";

export class DashboardView {
  public gridStack: GridStack;
  public widgetDefinitions: WidgetDetails[];
  public cellHeight = 115;

  float: boolean = false;
  showBorder: boolean = false;

  public async bind() {
    this.widgetDefinitions = this.fetchWidgets();
  }

  public attached() {
  
    this.gridStack = GridStack.init({
      cellHeight: this.cellHeight,
      margin: 10,
      animate: true,
      alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ),
      resizable: {
        handles: 'e, se, s, sw, w'
      },
      float: this.float
    });
  
    this.gridStack.on("change", async (event, elements: (GridStackNode & GridStackWidget)[]) => {
      const saved = this.gridStack.save(false) as (GridStackWidget & WidgetDetails)[];

      this.widgetDefinitions.forEach(el => {
        const hit = saved.find(w => w.id === el.id);
        if (hit) {
          hit.module = el.module;
        }
      });

      console.log(JSON.stringify(this.widgetDefinitions));
    });
  }

  toggleFloat(){
    this.float = !this.gridStack.getFloat();
    this.gridStack.float(this.float);
  }

  public removeWidget = (el: GridStackElement) => this.gridStack.removeWidget(el);

  fetchWidgets(){
    return  [
        { 'x': 10,'y': 4, 'width': 2, 'height': 2, 'id': 1, 'module': 'textblock', 'content': 'Widget 1'},
        { 'x': 8, 'y': 4, 'width': 2, 'height': 2, 'id': 2, 'module': 'textblock', 'content': 'Widget 2'},
        { 'x': 4, 'y': 4, 'width': 4, 'height': 2, 'id': 3, 'module': 'textblock', 'content': 'Widget 3'},
        { 'x': 0, 'y': 4, 'width': 2, 'height': 2, 'id': 4, 'module': 'textblock', 'content': 'Widget 4'},
        { 'x': 8, 'y': 2, 'width': 4, 'height': 2, 'id': 5, 'module': 'textblock', 'content': 'Widget 5'},
        { 'x': 2, 'y': 2, 'width': 2, 'height': 4, 'id': 6, 'module': 'textblock', 'content': 'Widget 6'},
        { 'x': 0, 'y': 2, 'width': 2, 'height': 2, 'id': 7, 'module': 'textblock', 'content': 'Widget 7'},
        { 'x': 10,'y': 0, 'width': 2, 'height': 2, 'id': 8, 'module': 'textblock', 'content': 'Widget 8'},
        { 'x': 8, 'y': 0, 'width': 2, 'height': 2, 'id': 9, 'module': 'textblock', 'content': 'Widget 9'},
        { 'x': 4, 'y': 0, 'width': 4, 'height': 4, 'id': 10, 'module': 'todo', 'noResize': true, 'noMove': true, 'locked': true},
        { 'x': 0, 'y': 0, 'width': 4, 'height': 2, 'id': 11, 'module': 'textblock', 'content': 'Widget 11'},
      ];
  }
}
