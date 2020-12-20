import { observable } from "aurelia-framework";
import { GridStack, GridStackNode, GridStackWidget } from "gridstack";
import 'gridstack/dist/h5/gridstack-dd-native';
import { WidgetDetails } from "./widgets/widget-details";

export class WorkspaceDashboard {
  @observable() public gridStack: GridStack;
  @observable() public cellHeight = 115;

  public widgetDefinitions: WidgetDetails[];

  public async activate() {
    this.widgetDefinitions = this.fetchWorkspaceWidgets();

    return true;
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
      float:false
    });
  
    this.gridStack.on("change", async (event, elements: (GridStackNode & GridStackWidget)[]) => {
      const saved = this.gridStack.save(false) as (GridStackWidget & WidgetDetails)[];

      this.widgetDefinitions.forEach(el => {
        const hit = saved.find(w => w.id === el.id);
        if (hit) {
          hit.module = el.module;
        }
      });
    });
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
