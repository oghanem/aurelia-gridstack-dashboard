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
    return [{
      "x": 2,
      "y": 0,
      "width": 2,
      "height": 4,
      "id": "12287",
      "module": "articles"
    },{
      "x": 5,
      "y": 8,
      "width": 2,
      "height": 6,
      "id": "187",
      "module": "textblock"
    }];
  }
}
