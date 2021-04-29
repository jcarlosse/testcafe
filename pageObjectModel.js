//Page Object Model
import { Selector } from 'testcafe';
//Metemos dentro de la clase todos los constructores
class Page{

    constructor() {
        this.nameDev = Selector('#developer-name');
        this.checkboxRemoteTest = Selector('#remote-testing');
        this.radioButtonLinux = Selector('#linux');
        this.listaInterface = Selector('#preferred-interface');
        this.elementJavascriptApi = Selector('#preferred-interface > option:nth-child(2)');
        this.checkBoxTriedTC = Selector('#tried-test-cafe');
        this.textArea = Selector('#comments');

        //Slider
        this.sliderObjeto = Selector('#slider')
        this.slider = {
            handle: Selector('.ui-slider-handle'),
            tick: Selector('.slider-value')

        }// Se usa el objeto ya que esta dentro del slider, se usan dos objetos handle y tick
    }
}
export default new Page();  //

