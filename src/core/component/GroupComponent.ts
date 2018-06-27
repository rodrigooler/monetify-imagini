export class GroupComponent<Component> {
  private items: Component[];

  constructor(items: Component[] = []) {
    this.items = items;
  }

  public getItems(): Array<Component> {
    return this.items;
  }

  public addItem(item: Component): void {
    this.items.push(item);
  }
}
