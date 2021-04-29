//import { Selector } from 'testcafe'; //Esto no es necesario cuando se invoca al POM, se necesita hacer referencia al POM
import pagina from './pageObjectModel';

fixture('Mis primeras pruebas en testcafe')
    .page('https://devexpress.github.io/testcafe/example/');

test('Probar que la pagina se abra', async t =>{
    await t
});

test('Probar que se pueda escribir el nombre del developer', async t => {
    await t
        .typeText(pagina.nameDev, 'Carlos')
        .expect(pagina.nameDev.value).eql('Carlos')
});

test('Probar que se puede seleccionar el checkbox de Remote Testing', async t => {
    await t
        .click(pagina.checkboxRemoteTest)
        .expect(pagina.checkboxRemoteTest.checked).ok();
});


test('Probar que se puede seleccionar un radio button de linux', async t => {
    await t
        .click(pagina.radioButtonLinux)
        .expect(pagina.radioButtonLinux.checked).ok();
});

test('Probar que se selecciona un elemento de una lista', async t => {
    await t
        .click(pagina.listaInterface)
        .click(pagina.elementJavascriptApi)
        .expect(pagina.elementJavascriptApi.value).ok()
        .expect(pagina.elementJavascriptApi.selected).ok();
});

test('Probar que se puede escribir en el area de texto', async t => {
    await t
        .click(pagina.checkBoxTriedTC)
        .typeText(pagina.textArea, 'Welcome al mundo de TestCafe', {speed: 0.1})
        .typeText(pagina.textArea, '\n Salto de linea')
        .typeText(pagina.textArea, 'Ahora sucede esto', { replace: true, speed: 0.1 })
        .expect(pagina.textArea.value).eql('Ahora sucede esto')
});

test('Probar mover el slider', async t => {
    await t
        .click(pagina.checkBoxTriedTC)
        .expect(pagina.checkBoxTriedTC.checked).ok()

        .dragToElement(pagina.slider.handle, pagina.slider.tick.withText('9'), { speed: 0.1 })
        //Tarea: ¿Como se valida que si esta en la posicion que debe de estar?

});
   





