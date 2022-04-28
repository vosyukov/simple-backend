class HallResponse {
  id: string;
  studioId: string;
  studioName: string;
  description: string;
  name: string;
  features: string[];
  area: number;

  ceilingHeight: number;
  price: number;
  address: string;
  photos: string[];
}

export class GetHallsPaginatedResponseDto {
  items: HallResponse[];
  total: number;
}
