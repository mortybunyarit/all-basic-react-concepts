export default function App() {
	const todos = ["Read a book", "Do workout", "Feed the dog"]
	
	return (
		<div className="flex justify-center flex-col items-center">
			<h1 className="font-extrabold text-red-500">To Do List</h1>
			<div className="">
				<ul>
					{
					  todos.map((item, index) => {
						  return <li key={index}>{item}</li>
					  })
					}
				</ul>
			</div>
		</div>
	);
}
