$( document ).ready(function() {

	var todos = [ "Build your own iPod" ];
	var input = prompt( "What would you like to do?");

	while( input !== "quit" ) {
		if ( input === "list" ) {
			todos.forEach( function( todo, i ) {
				console.log( i + ": "+ todo );
			});
		}
		else if ( input == "new" ) {
			var addTodo = prompt( "Enter your new Todo:");
			todos.push( addTodo );
		}
		else if ( input === "delete" ) {
			var removal = prompt( "Which number do you want to delete?" );
			todos.splice( removal, 1 );
		}
		input = prompt( "What would you like to do next?");
	}

	console.log( "App has been quit." );

});