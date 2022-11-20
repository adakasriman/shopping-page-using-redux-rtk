

export interface ProductArray {
    isDeleted: any
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}




export interface ApiDataObject {
    indexOf(id: number): unknown
    "products": ProductArray[],
    "total": number,
    "skip": number,
    "limit": number
}
