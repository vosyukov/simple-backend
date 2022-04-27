
class HallResponse {
    id: string
    studioId: string
    description: string
    name: string
    features: string[]
    area: number
    ceilingHeight: number
    price: number
    photos: string[]

}

export class GetHallsPaginatedResponseDto {
    items: HallResponse[]
    total:number
}