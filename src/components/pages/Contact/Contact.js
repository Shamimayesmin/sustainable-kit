import React from "react";
import img from '../../assates/images/Students-University.jpg'
//lg:h-screen relative
const Contact = () => {
	return (
		<section class="shadow-xl flex flex-wrap lg:items-center py-10">
			<div class="w-full sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-12">
				<div class="mx-auto max-w-lg text-center">
					<h1 class="text-2xl font-bold sm:text-3xl">CONTACT US</h1>

					<p class="mt-4 text-gray-500">
						16 Liffey Ave, Liffey Valley Park, Lucan, Co. Dublin, K78 HW50,
						Ireland,<br /> hello@earthly.ie <br /> +353 1552 4908
					</p>
				</div>
				<form
					action=""
					class="mx-auto mt-8 rounded-md max-w-md lg:overflow-hidden shadow-xl p-10"
				>
					<h2 className="text-center text-3xl text-green-800 font-bold font-serif m-3">Get In Touch</h2>
                    <div className="flex gap-2 text-green-800 mt-3">
						<div>
							<label for="name" class="">
								First Name
							</label>

							<div class="relative">
								<input
									type="text"
									class="w-full border rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
								/>
							</div>
						</div>
						<div>
							<label for="lastName" class="">
								Last Name
							</label>

							<div class="relative">
								<input
									type="text"
									class="w-full border rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
								/>
							</div>
						</div>
					</div>

					<div className="flex gap-2 text-green-800 mt-3">
						<div>
							<label for="email" class="">
								Email
							</label>

							<div class="relative">
								<input
									type="email"
									class="w-full rounded-lg border border-gray-200 p-4 pr-12 text-sm shadow-sm"
									placeholder="Enter email"
								/>
							</div>
						</div>

						<div>
							<label for="phone" class="">
								Phone
							</label>
							<div class="relative">
								<input
									type="text"
									class="w-full rounded-lg border border-gray-200 p-4 pr-12 text-sm shadow-sm"
								/>
							</div>
						</div>
					</div>
					<div className="text-green-800 mt-3">
						<label for="message" class="">
							Message
						</label>
						<div class="relative">
							<textarea
								type="text"
								class="w-full border rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
							/>
						</div>
					</div>

					<div class="mb-8">
						<button
							type="submit"
							class="w-full inline-block rounded-lg bg-green-600 px-5 py-3 text-sm lg:overflow-hidden font-medium text-white"
						>
							Submit
						</button>
					</div>
				</form>
			</div>

			<div class=" w-full sm:h-96 lg:h-full lg:w-1/2 lg:overflow-hidden">
				<img
					alt="Welcome"
					src={img}
					class=" h-full w-full object-cover"
				/>
			</div>
		</section>
	);
};
export default Contact;
