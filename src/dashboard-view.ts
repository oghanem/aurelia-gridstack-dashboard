import { GridStack, GridStackNode, GridStackWidget } from "gridstack";
import 'gridstack/dist/h5/gridstack-dd-native';
import { WidgetDetails } from "./widgets/widget-details";

export class DashboardView {
  public gridStack: GridStack;
  public cellHeight = 115;
  public float: boolean = false;
  public widgetDefinitions: WidgetDetails[];

  public async bind() {
    this.widgetDefinitions = this.fetchWorkspaceWidgets();
  }

  public attached() {
 
    this.gridStack = GridStack.init({
      cellHeight: this.cellHeight,
      margin: 10,
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

  fetchWorkspaceWidgets(){
    return  [
        { 'x': 10,'y': 4, 'width': 2, 'height': 2, 'id': 1, 'module': 'textblock'},
        { 'x': 8, 'y': 4, 'width': 2, 'height': 2, 'id': 2, 'module': 'textblock'},
        { 'x': 4, 'y': 4, 'width': 4, 'height': 2, 'id': 3, 'module': 'textblock'},
        { 'x': 0, 'y': 4, 'width': 2, 'height': 2, 'id': 4, 'module': 'textblock'},
        { 'x': 8, 'y': 2, 'width': 4, 'height': 2, 'id': 5, 'module': 'textblock'},
        { 'x': 2, 'y': 2, 'width': 2, 'height': 4, 'id': 6, 'module': 'textblock'},
        { 'x': 0, 'y': 2, 'width': 2, 'height': 2, 'id': 7, 'module': 'textblock'},
        { 'x': 10,'y': 0, 'width': 2, 'height': 2, 'id': 8, 'module': 'textblock'},
        { 'x': 8, 'y': 0, 'width': 2, 'height': 2, 'id': 9, 'module': 'textblock'},
        { 'x': 4, 'y': 0, 'width': 4, 'height': 4, 'id': 10, 'module': 'todo'},
        { 'x': 0, 'y': 0, 'width': 4, 'height': 2, 'id': 11, 'module': 'textblock'},
      ];
  }
}
