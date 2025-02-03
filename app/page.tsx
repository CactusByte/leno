import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CarIcon, TvIcon, MicIcon as MicrophoneIcon } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#e1c9ad] text-[#4a3f35]">
      <header className="w-full">
        <Image
          src="/$LENO.png"
          alt="$LENO Coin Banner"
          width={1500}
          height={500}
          className="w-full h-auto"
          priority
        />
      </header>

      <main className="container mx-auto mt-8 px-4">
        <h1 className="text-4xl font-bold text-center text-[#897662]">$LENO Coin</h1>
        <p className="text-center mt-2 text-xl">The cryptocurrency with a chin up on the competition!</p>

        <div className="max-w-2xl mx-auto bg-[#b29e88] rounded-lg p-8 shadow-lg mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#4a3f35]">Why $LENO Coin?</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <CarIcon className="w-6 h-6 mr-2" />
              <span>Fueled by an impressive collection of classic cars</span>
            </li>
            <li className="flex items-center">
              <TvIcon className="w-6 h-6 mr-2" />
              <span>As reliable as a late-night TV host</span>
            </li>
            <li className="flex items-center">
              <MicrophoneIcon className="w-6 h-6 mr-2" />
              <span>Powered by witty one-liners and celebrity interviews</span>
            </li>
          </ul>

          <div className="mt-8 text-center">
            <Link href="" className="bg-[#897662] hover:bg-[#6d5d4e] text-white font-bold py-2 px-4 rounded-full transition duration-300">
              Get Your $LENO Coins Now!
            </Link>
          </div>
        </div>
      </main>

      <footer className="container mx-auto mt-12 pb-8 px-4 text-center text-[#897662]">
        <p>© 2025 $LENO Coin. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-[#6d5d4e] transition duration-300">
            Twitter
          </a>
          <a href="#" className="hover:text-[#6d5d4e] transition duration-300">
            Telegram
          </a>
          <a href="#" className="hover:text-[#6d5d4e] transition duration-300">
            Discord
          </a>
        </div>
      </footer>
    </div>
  )
}

