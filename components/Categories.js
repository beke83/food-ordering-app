import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator
        >
            {/*CATEGORY CARD */}
            <CategoryCard
                imgUrl='https://i8b2m3d9.stackpathcdn.com/wp-content/uploads/2019/07/Take-away-sushi-rolls_3781NM.jpg'
                title="Tesing1"
            />
            <CategoryCard
                imgUrl='https://i8b2m3d9.stackpathcdn.com/wp-content/uploads/2019/07/Take-away-sushi-rolls_3781NM.jpg'
                title="Tesing2"
            />
            <CategoryCard
                imgUrl='https://i8b2m3d9.stackpathcdn.com/wp-content/uploads/2019/07/Take-away-sushi-rolls_3781NM.jpg'
                title="Testing3"
            />
            <CategoryCard
                imgUrl='https://i8b2m3d9.stackpathcdn.com/wp-content/uploads/2019/07/Take-away-sushi-rolls_3781NM.jpg'
                title="Testing3"
            />
            <CategoryCard
                imgUrl='https://i8b2m3d9.stackpathcdn.com/wp-content/uploads/2019/07/Take-away-sushi-rolls_3781NM.jpg'
                title="Testing3"
            />
        </ScrollView>
    )
}

export default Categories