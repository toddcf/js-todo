$( document ).ready(function() {

	var todos = [ "Build your own iPod" ];
	var input = prompt( "What would you like to do?" );

	function listTodos() {
		todos.forEach( function( todo, i ) {
			console.log( i + ": "+ todo );
		});
	}

	function addTodo() {
		var newTodo = prompt( "Enter your new Todo:");
		todos.push( newTodo );
		console.log( "Added " + newTodo + " to list." );
	}

	function deleteTodo() {
		var removal = prompt( "Which number do you want to delete?" );
		todos.splice( removal, 1 );
		console.log( "Number " + removal + " has been deleted." );
	}

	while( input !== "quit" ) {
		if ( input === "list" ) {
			listTodos();
		}
		else if ( input == "new" ) {
			addTodo();
		}
		else if ( input === "delete" ) {
			deleteTodo();
		}
		input = prompt( "What would you like to do next?" );
	}

	console.log( "App has been quit." );

});