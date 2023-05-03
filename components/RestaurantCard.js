import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function RestaurantCard({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
}) {
    return (
        <TouchableOpacity>
            <Image
                source={{ uri: imgUrl }}
                classname="h-36 w-36 rounded-sm"
            />
        </TouchableOpacity>
    )
}