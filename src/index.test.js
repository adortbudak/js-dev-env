import {expect} from 'chai';


describe('First Test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

/*describe('index.html', () => {
  it ('should say hello', () => {
    const index = fs.readFileSync('./src/index.html',"utf-8");

    JSDOM.env(index, function(err,window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello World!");
      window.close();
    });
  })
});*/
