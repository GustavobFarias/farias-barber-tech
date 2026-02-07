import { SearchIcon } from "lucide-react"
import Header from "./_components/Header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

function Home() {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2>Olá, Gustavo!</h2>
        <p>Sábado, 07 de Fevereiro</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner.png"
            alt="Agende nos melhores com FSN Barber"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
