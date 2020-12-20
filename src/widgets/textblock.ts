
export class Textblock {
  text: string;

  activate(model) {
    console.log('Textblock: ');
    console.log(model);

    this.text = "Textblock Widget";
  }
}
