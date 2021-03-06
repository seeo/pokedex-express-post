var React = require('react');

class Edit extends React.Component {

  render() {
    const actionAttribute = `/pokemon/${this.props.idKey}?_method=PUT`  //according to Akira.
    console.log("Printing out action attribute");
    console.log(actionAttribute);
    const thisPokemonObj = this.props.respondKey
    console.log("Printing out the selected pokemon stats as an oject with key-value pairs")
    console.log(thisPokemonObj);
    console.log("Printing out stuff that is going to render");
    console.log("Printing out this.props.respondKey below");
    console.log(this.props.respondKey);

    console.log("Printing out this pokemon's id below:");
    console.log(this.props.respondKey.id);

    return (
      // <h1>EDIT: This is Pokemon # {thisPokemonObj.num}</h1>
      <form method = "POST" action ={actionAttribute}>
        Pokemon ID (1 to 151):<br/>
        <input type = "number" name = "id" value = {this.props.respondKey.id}/><br/>
        Pokemon Number (001 to 151):<br/>
        <input type = "text" name = "num" value = {this.props.respondKey.num}/><br/>
        Pokemon Name: <br/>
        <input type = "text" name = "name" value = {this.props.respondKey.name}/><br/>
        Pokemon Image: <br/>
        <img type = "image" name = "img" src = {this.props.respondKey.img}/><br/>
        <input type = "url" name = "img" value = {this.props.respondKey.img}/><br/>
        Pokemon Height: <br/>
        <input type = "text" name = "height" value = {this.props.respondKey.height}/><br/>
        Pokemon Weight: <br/>
        <input type = "text" name = "weight" value = {this.props.respondKey.weight}/><br/>
        Pokemon Candy: <br/>
        <input type = "text" name = "candy" value = {this.props.respondKey.candy}/><br/>
        Pokemon Candy Count: <br/>
        <input type = "text" name = "candy_count" value = {this.props.respondKey.candy_count}/><br/>
        Pokemon Egg: <br/>
        <input type = "text" name = "egg" value = {this.props.respondKey.egg}/><br/>
        Pokemon Average Spawn Count: <br/>
        <input type = "text" name = "avg_spawns" value = {this.props.respondKey.avg_spawns}/><br/>
        Pokemon Spawn Time: <br/>
        <input type = "text" name = "spawn_time" value = {this.props.respondKey.spawn_time}/><br/>
        <br/>
        <input type = "submit" value = "Submit"/>
      </form>
    );
    console.log("Edit jsx Rendering works!");
  }
}

module.exports = Edit;



//   render() {
//     console.log(this.props['0'])
//     return (
//         <html>
//             <body>
//               <div>
//                  <h1>pokemon: {this.props.name}</h1>
//               </div>
//             </body>
//         </html>
//     );
//   }
// }
// module.exports = Home;
