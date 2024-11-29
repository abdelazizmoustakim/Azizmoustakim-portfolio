import React from 'react'

const Error = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl" bis_skin_checked="1">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl">
			<span className="dark:text-red-600">Oops!</span> There was an <span className="dark:text-red-600">error</span>
		</h1>
		<p className="px-8 mt-8 mb-12 text-lg">Something went wrong. Please try again later or contact support.</p>
		<div className="flex flex-wrap justify-center" bis_skin_checked="1">
			<button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-red-600 dark:text-gray-50">Go Back</button>
			<button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-900 dark:border-gray-300">Contact Support</button>
		</div>
	</div>
    </section>

  )
}

export default Error
