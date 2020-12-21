export class GsXCustomAttribute {
  static inject = [Element];
  value: any;

  constructor(public element: Element) {}

  bind() {
    this.element.setAttribute("gs-x", this.value);
    console.log(this.value);
  }
}

export class GsYCustomAttribute {
  static inject = [Element];
  value: any;

  constructor(public element: Element) {}

  bind() {
    this.element.setAttribute("gs-y", this.value);
    console.log(this.value);
  }
}


export class GsHCustomAttribute {
  static inject = [Element];
  value: any;

  constructor(public element: Element) {}

  bind() {
    this.element.setAttribute("gs-h", this.value);
    console.log(this.value);
  }
}


export class GsWCustomAttribute {
  static inject = [Element];
  value: any;

  constructor(public element: Element) {}

  bind() {
    this.element.setAttribute("gs-w", this.value);
    console.log(this.value);
  }
}

export class GsIdCustomAttribute {
  static inject = [Element];
  value: any;

  constructor(public element: Element) {}

  bind() {
    this.element.setAttribute("gs-id", this.value);
    console.log(this.value);
  }
}

export class GsNoMoveCustomAttribute {
  static inject = [Element];
  value: any;

  constructor(public element: Element) {}

  bind() {
    this.element.setAttribute("gs-no-move", this.value);
    console.log(this.value);
  }
}

export class GsLockedCustomAttribute {
  static inject = [Element];
  value: any;

  constructor(public element: Element) {}

  bind() {
    this.element.setAttribute("gs-locked", this.value);
    console.log(this.value);
  }
}