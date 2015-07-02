//site/js/views/library.js

var app = app || {}; 

app.LibraryView = Backbone.View.extend({
	el: '#books', 

	initialize: function( initialBooks ) {
		this.collection = new app.Library(initialBooks ); 
		this.render(); 
	}, 

	//render library by rendering each book in its collection
	render: function() {
		this.collection.each(function(item) {
			this.renderBook(item); 
		}, this); 
	}, 

	//render a book by creating a BookView and appending the element it renders to the element's library
	renderBook: function(item) {
		var bookView = new app.BookView({
			model: item
		}); 
		this.$el.append(bookView.render().el); 
	}, 

	events: {
		'click #add': 'addBook'
	}, 

	addBook: function(e) {
		e.preventDefault(); 

		var formData = {}; 

		$('#addBook div').children('input').each(
			function( i, el) {
				console.log($(el).val()); 
				if( $(el).val() !="") 
				{
					formData[el.id] = $(el).val(); 
				}
			}); 

		this.collection.add(new app.Book(formData)); 

		this.listenTo(this.collection, 'add', this.renderBook ); 
	}
}); 