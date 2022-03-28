function DynamicVariable() {
  const States = ['Scott', 'James', 'Francis', 'John'];
  this.Scott = {
    location: "Benin"
  };
  this.James = {
    location: "Lagos"
  };
  this.Francis = {
    location: "Abuja"
  };
  this.John = {
    location: "Kaduna"
  };
  let newState = null;
  States.forEach((state) => {
    newState = state;
    var name = window[state]; // === undefined
    name = this[newState].location; // === 1
    console.log(`${state} has a state : ${name}`)
  })

}

new DynamicVariable();
