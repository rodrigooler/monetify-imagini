import * as Jimp from 'jimp';
import { IBackground } from '../interface/IBackground';
import { Constructor } from './Constructor';

export class Background extends Constructor<IBackground> {
  public run() {
    if (this.component.getItems().length > 0) {
      const background: IBackground = this.getBackground();
      return Jimp.read(background.image);
    } else {
      throw new Error('Nenhum background encontrado');
    }
  }

  private getBackground(): IBackground {
    const items = this.component.getItems();
    return items[Math.floor(Math.random() * items.length)];
  }
}
