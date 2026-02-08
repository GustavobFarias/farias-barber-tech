import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { db } from "./_lib/prisma"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import BarberShopItem from "./_components/barberShopItem"
import { quickSearchOptions } from "./_constants/Seach"
import BookingItem from "./_components/booking-item"

const Home = async () => {
  const barberShops = await db.barberShop.findMany({})
  const popularBarberShops = await db.barberShop.findMany({
    orderBy: {
      name: "desc",
    },
  })
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

        {/*  BUSCA RÁPIDA */}
        <div className="mt-6 flex gap-3 overflow-auto [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button className="gap-2" variant="secondary" key={option.title}>
              <Image
                src={option.imageUrl}
                width={16}
                height={16}
                alt={option.title}
              />
              {option.title}
            </Button>
          ))}
        </div>

        {/* AGENDAMENTOS */}
        <BookingItem />

        {/* IMAGEM */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner.png"
            alt="Agende nos melhores com FSN Barber"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* RECOMENDADOS */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barberShops.map((barberShops) => (
            <BarberShopItem key={barberShops.id} barberShop={barberShops} />
          ))}
        </div>

        {/* POPULAR  */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarberShops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barberShop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
