import { Background } from "./Background";
import { IBackground } from "../interface/IBackground";
import { GroupComponent } from "../component/GroupComponent";
import { Gender } from "../enum/Gender";
import { IUser } from "../interface/IUser";
import { readFileSync } from "fs";

const backgroundExemple: IBackground = {
  image: 'resources/tests/applications/01/background.png'
}
const backgroundGroupComponent = new GroupComponent<IBackground>([backgroundExemple]);

const userExemple: IUser = {
  name: 'Fabricio',
  picture: 'resources/fabricio.jpg',
  birthday: new Date('1995-03-30 GMT-0300'),
  gender: Gender.Male
};

const background = new Background(undefined, userExemple, backgroundGroupComponent);
const original = 'resources/tests/applications/01/background.png';

it('Gerando um background', () => {
  expect.assertions(1);
  return background
        .run()
        .then(image => expect(image.bitmap.data.compare(readFileSync(original))).toEqual(1));
})
