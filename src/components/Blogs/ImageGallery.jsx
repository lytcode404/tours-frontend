import Link from "next/link";
import Image from "next/image";
export default function ImageGallery () {
  return (
    <div className="py-10 text-center">
      <div className="px-4 xl:max-w-7xl xl:mx-auto">
        <h1 className="font-black tracking-normal text-3xl dark:text-slate-100 sm:text-4xl sm:text-slate-900">
          Checkout Our Gallery
        </h1>
        <p className="mt-3 text-lg dark:text-gray-300 sm:max-w-lg sm:mx-auto">
        Time is more valuable than money. You can get more money but you cannot get more time.
        </p>
        <div className="grid grid-cols-2 gap-2 mt-7 sm:px-16 lg:grid-cols-8 lg:grid-rows-2 lg:gap-3">
          <Link href="/blogs/all" className="col-span-2 lg:col-span-4 lg:row-span-2">
            <Image
              className="w-full bg-blue-50"
              width={10}
              height={10}
              src="https://picsum.photos/502"
              alt=""
            />
          </Link>
          <Link href="/blogs/all" className="lg:col-span-2">
            <Image
              className="w-full bg-blue-50"
              width={10}
              height={10}
              src="https://picsum.photos/300"
              alt=""
            />
          </Link>
          <Link href="/blogs/all" className="lg:col-span-2">
            <Image
              className="w-full bg-blue-50"
              width={10}
              height={10}
              src="https://picsum.photos/303"
              alt=""
            />
          </Link>
          <Link href="/blogs/all" className="col-span-2 lg:block lg:col-span-4">
            <Image
              className="w-full bg-blue-50"
              width={10}
              height={10}
              src="https://picsum.photos/602/296"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  )
}