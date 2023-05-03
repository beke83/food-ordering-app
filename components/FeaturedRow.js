import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description }) => {
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>

            <Text className="xs text-gray-500 px-4">{description}</Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >
                <RestaurantCard
                    id={123}
                    imgUrl="https://i8b2m3d9.stackpathcdn.com/wp-content/uploads/2019/07/Take-away-sushi-rolls_3781NM.jpg"
                    title="Nandos Sush"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main st"
                    short_description="This is a desc"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="https://i8b2m3d9.stackpathcdn.com/wp-content/uploads/2019/07/Take-away-sushi-rolls_3781NM.jpg"
                    title="Nandos Sush"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main st"
                    short_description="This is a desc"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="https://i8b2m3d9.stackpathcdn.com/wp-content/uploads/2019/07/Take-away-sushi-rolls_3781NM.jpg"
                    title="Nandos Sush"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main st"
                    short_description="This is a desc"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="https://i8b2m3d9.stackpathcdn.com/wp-content/uploads/2019/07/Take-away-sushi-rolls_3781NM.jpg"
                    title="Nandos Sush"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main st"
                    short_description="This is a desc"
                    dishes={[]}
                    long={20}
                    lat={0}
                />

            </ScrollView>

        </View>
    )
}

export default FeaturedRow
