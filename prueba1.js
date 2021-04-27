import { Selector } from 'testcafe';

fixture('Mis primeras pruebas en testcafe')
    .page('https://devexpress.github.io/testcafe/example/');

//test('nombre de prueba', funcion asincrona {})

test('Probar que la pagina se abra', async t => {

    await t //sin  ; porque sigue siendo la misma declaracion
        .typeText(Selector('#developer-name'), 'Carlos')
        .expect(Selector('#developer-name').value).equal('Calos')
}//final de la función asincrona
)//fin de Test 
    ;

