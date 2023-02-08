import React from "react";

const JoinUs = () => {
	return (
		<div className="w-full dark:bg-gray-500 py-10">
			<div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
				<h1 className="text-6xl antialiased leading-none text-center font-sans dark:text-gray-100">
					Join the Club
				</h1>
				<p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100 font-sans">
					Join our email list and get access to specials deals exclusive to our
					subscribers.
				</p>
				<div className="flex flex-row">
					
					<input
						type="text"
						placeholder="example@email.com"
						className="w-3/5 p-3 border rounded-l-lg sm:w-2/3"
						data-temp-mail-org="0"
					/>
					<button
						type="button"
						className="w-2/5 bg-green-700 p-3 text-white font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-gray-900"
					>
						Sign Up
					</button>
				</div>
			</div>
		</div>
	);
};

export default JoinUs;
