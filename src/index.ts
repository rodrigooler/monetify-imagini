import { Background } from "./core/constructor/Background";
import { IBackground } from "./core/interface/IBackground";
import { GroupComponent } from "./core/component/GroupComponent";
import { Gender } from "./core/enum/Gender";
import { IUser } from "./core/interface/IUser";

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


console.log(background.user.name)