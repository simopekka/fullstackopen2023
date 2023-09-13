const dummy = ( blogs ) => {
	console.log(blogs)
	return 1
}

const totalLikes = ( blogs ) => {
	if (blogs.length === 0) {
		return 0
	} else if (blogs.length === 1) {
		return blogs[0].likes
	} else {
		var total = blogs.reduce((previous, current) => {
			return previous + current.likes
		}, 0)
		return total
	}
}

const favoriteBlog = ( blogs ) => {
	const mostLikes = blogs.reduce((previous, current) => {
		if (current.likes >= previous) {
			return current.likes
		}
		return previous
	}, 0)
	var blog = blogs.find(blog => blog.likes === mostLikes)
	return blog
}

module.exports = {
	dummy,
	totalLikes,
	favoriteBlog
}