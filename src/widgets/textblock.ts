
export class Textblock {
  heading: any;
  content: any;

  activate(model) {
    console.log(model);

    this.heading = 'Textblock Widget';
    this.content = model.content;
  }
}
