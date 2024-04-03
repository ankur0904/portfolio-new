function Experience() {
    return (
        <section className="relative isolate overflow-hidden bg-white px-6 py-12 lg:px-8 flex justify-center items-center">
            <div class="mt-6 border-t border-gray-100">
                <dl class="divide-y divide-gray-100">
                    <h5 className="mb-8 text-4xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Experience</h5>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-lg font-medium leading-6 text-gray-900">Mentee</dt>
                        <dd class="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Hyperledger Foundation</dd>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">July 2023 - February 2024</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-lg font-medium leading-6 text-gray-900">Open source contributor</dt>
                        <dd class="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Social Summer of Code</dd>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">August 2022 - September 2022</dd>
                    </div>
                </dl>
            </div>
        </section>
    )
}

export default Experience;