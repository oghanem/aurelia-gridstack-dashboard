
export class Articles {
  articles:any;

  activate(model) {
    console.log('Articles: ');
    console.log(model);

    this.articles = [
      {
        name: 'Coke',
        price: 'USD 1.20'
      },
      {
        name: 'Pizza',
        price: 'USD 4.73'
      },
      {
        name: 'Stuff',
        price: 'USD 0.20'
      }
    ];
  }
}
