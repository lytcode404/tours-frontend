import Link from "next/link";

export default function ImageGallery () {
  return (
    <div className="py-10 text-center">
      <div className="px-4 xl:max-w-7xl xl:mx-auto">
        <h1 className="font-black tracking-normal text-3xl dark:text-slate-100 sm:text-4xl sm:text-slate-900">
          Checkout Our Gallery
        </h1>
        <p className="mt-3 text-lg dark:text-gray-300 sm:max-w-lg sm:mx-auto">
        "Time is more valuable than money. You can get more money, but you cannot get more time.
        </p>
        <div className="grid grid-cols-2 gap-2 mt-7 sm:px-16 lg:grid-cols-8 lg:grid-rows-2 lg:gap-3">
          <Link href="/blogs/all" className="col-span-2 lg:col-span-4 lg:row-span-2">
            <img
              className="w-full bg-blue-50"
              src="https://picsum.photos/502"
            />
          </Link>
          <Link href="/blogs/all" className="lg:col-span-2">
            <img
              className="w-full bg-blue-50"
              src="https://picsum.photos/300"
            />
          </Link>
          <Link href="/blogs/all" className="lg:col-span-2">
            <img
              className="w-full bg-blue-50"
              src="https://picsum.photos/303"
            />
          </Link>
          <Link href="/blogs/all" className="col-span-2 lg:block lg:col-span-4">
            <img
              className="w-full bg-blue-50"
              src="https://picsum.photos/602/296"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}