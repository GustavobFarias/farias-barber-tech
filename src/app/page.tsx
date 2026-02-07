import { SearchIcon } from "lucide-react"
import Header from "./_components/Header"
import { db } from "./_lib/prisma"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar } from "@radix-ui/react-avatar"
import { AvatarImage } from "./_components/ui/avatar"
import BarberShopItem from "./_components/BarberShopItem"

const Home = async () => {
  const barberShops = await db.barberShop.findMany({})
  console.log(barberShops)
  return (
    <div>
      <Header />
      {/* CONTEÚDO */}
      <div className="p-5">
        <h2>Olá, Gustavo!</h2>
        <p>Sábado, 07 de Fevereiro</p>

        {/* BUSCA */}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* IMAGEM */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner.png"
            alt="Agende nos melhores com FSN Barber"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* AGENDAMENTOS */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">confirmar</Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>

              <div className="itens-center flex gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Gustavo Farias</p>
              </div>
            </div>
            <div className="flex flex-col justify-center border-l border-solid px-5 text-center">
              <p className="text-sm">Fevereiro</p>
              <p className="text-2xl">07</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barberShops.map((barberShops) => (
            <BarberShopItem key={barberShops.id} barberShop={barberShops} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
