<h1>Project Serendipity</h1>

<h2> Concept </h2>
Project serendipity was created as a staple project, so that the employer can access my current level of programming skills and techniques. 
As a website, it consists of a platform that users can share their experiences with other users all over the world when it comes to a specific business type (hospitality, holidays, etc.).  When it comes to targeted locations associated with a specific business type, the content tends to be trendy, alternative or low cost. This creates the feeling of novelty and identity with the website’s image.
The concept derives from the word “Serendipity” which means: “An aptitude for making desirable discoveries by accident” according to dictionary.com. Taking in consideration what was stated in the previous paragraph, the idea is to encourage the user to search the website for its alternative content in order to find that “desirable discovery by accident” hence the name for it.

<h2> Technologies Used </h2>
This website was developed with a wide range of technologies ranging all the way from html to node.js. 
On the front-end side I used html, css, dom manipulation, javascript and even libraries like jQuery for animations. 
On the back-end side technologies like node.js, express and NoSQL databases like mongo were adopted. 
The general assembly concept derives from the combination of node, express and mongo (MEN Software bundle).
A further, more extensive list can be found in the package.json file provided. 

<h2> Navigation and routes </h2>
The navigation was mapped and implemented using RESTful routing. Every user has the ability to create, edit and destroy (CRUD methodology) his posts and comments.
Here is the concept table used for this project:
<table class="table table-hover table-bordered">
			<thead>	
				<tr>
					<th>Name</th>
					<th>Path</th>
					<th>HTTP Verb</th>
					<th>Purpose</th>
					<th>Mongoose Method</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Index</td>
					<td>/campgrounds</td>
					<td>GET</td>
					<td>List all campgrounds</td>
					<td>Campground.find()</td>
				</tr>
				<tr class="success">
					<td>New</td>
					<td>/campgrounds/new</td>
					<td>GET</td>
					<td>Show new campground form</td>
					<td>N/A</td>
				</tr>
				<tr class="success">
					<td>Create</td>
					<td>/campgrounds</td>
					<td>POST</td>
					<td>Create a new campground, then redirect somewhere</td>
					<td>Campground.create()</td>
				</tr>
				<tr class="info">
					<td>Show</td>
					<td>/campgrounds/:id</td>
					<td>GET</td>
					<td>Show info about one specific campground</td>
					<td>Campground.findById()</td>
				</tr>
				<tr class="warning">
					<td>Edit</td>
					<td>/campground/:id/edit</td>
					<td>GET</td>
					<td>Show edit form for one campground</td>
					<td>Campground.findById()</td>
				</tr>
				<tr class="warning">
					<td>Update</td>
					<td>/campgrounds/:id</td>
					<td>PUT</td>
					<td>Update particular campgroubd, then redirect somewhere</td>
					<td>Campground.findByIdAndUpdate()</td>
				</tr>
				<tr class="danger">
					<td>Destroy</td>
					<td>/campgrounds/:id</td>
					<td>DELETE</td>
					<td>Delete a particular campgrounnd, then redirect somewhere</td>
					<td>Campground.findByIdAndRemove()</td>
				</tr>
			</tbody>
		</table>
