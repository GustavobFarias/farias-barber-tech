import { StarIcon } from "lucide-react"
import { BarberShop } from "../../../prisma/generated/client"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Badge } from "./ui/badge"
import Link from "next/link"

interface BarberShopItemprops {
  barberShop: BarberShop
}

const BarberShopId = ({ barberShop }: BarberShopItemprops) => {
  return (
    <Card className="min-w-[167px]">
      <CardContent className="p-0 px-1 pt-1">
        <div className="relative h-[159px] w-full">
          <Image
            fill
            className="rounded-2xl object-cover"
            src={barberShop.imageUrl}
            alt={barberShop.name}
          />

          <Badge
            variant="secondary"
            className="absolute left-2 top-2 space-x-1"
          >
            <StarIcon size={12} className="fill-primary text-primary" />
            <p>5,0</p>
          </Badge>
        </div>

        <div className="px-1 py-3">
          <h3 className="truncate font-semibold">{barberShop.name}</h3>
          <p className="truncate text-sm text-gray-400">{barberShop.address}</p>
          <Button variant="secondary" className="mt-3 w-full" asChild>
            <Link href={`/barbershops/${barberShop.id}`}>Reservar</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarberShopId
