import { IBackground } from "../interface/IBackground";
import { GroupComponent } from "./GroupComponent";
import { backgroundExemple } from "../interface/IBackground.test";

export const backgroundGroupComponent = new GroupComponent<IBackground>([backgroundExemple]);

test('Valida a classe GroupComponent que agrupa componentes', () => {
  expect(backgroundGroupComponent.getItems()).toBeInstanceOf(Array);
})