require(
  ['model','view','controller'],
  function(){
    $(function(){
      var list = ['7.30: eat','9.00-13.00: work','13.00-14.00: eat','14.00-18.00: work','19.00-20.00: eat','20.00-24.00: have a rest', '24.00-7.00: sleep'];
      var model = new Model(list);
      var view = new View(model);
      var controller = new Controller(model, view);
    });
  }
);
