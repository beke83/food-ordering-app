import { useNavigation } from '@react-navigation/native'
import React, { Component, useEffect, useLayoutEffect, useState } from 'react'
import { SafeAreaView, Text, View, Image, TextInput, ScrollView } from 'react-native'
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from "react-native-heroicons/outline"
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import RestaurantCard from '../components/RestaurantCard'
import sanityClient from '../sanity';
import 'react-native-url-polyfill/auto';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);

    //is for whyy the UI loads 
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    useEffect(() => {
        //fetch 
        sanityClient.fetch(
            `
            *[_type == "featured"]
        `
        ).then(data => {
            setFeaturedCategories(data);
        })
    }, []);

    console.log(featuredCategories);

    return (
        <SafeAreaView className="bg-white pt-8">
            {/* Header*/}
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image
                    source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                    className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
                    <Text className="font-bold text-xl">
                        Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>
                <UserIcon size={35} color="#00CCBB" />
            </View>

            {/*Search*/}
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                    <MagnifyingGlassIcon color="#00CCBB" size={22} />
                    <TextInput placeholder='Restarants & Cusines'
                        keyboardType='default'
                    />
                </View>

                <AdjustmentsVerticalIcon color="#00CCBB" />
            </View>

            {/*Content*/}
            <ScrollView className="bg-gray-100"
                contentContainerStyle={{
                    paddingBottom: 100
                }}
            >
                {/*categories */}
                <Categories />

                {/*Featured */}
                <FeaturedRow
                    id="123"
                    title="Featured"
                    description="Paid placements from our partners"

                />
                <FeaturedRow
                    id="1234"
                    title="Tasty Discounts"
                    description="Paid placements from our partners"
                />
                <FeaturedRow
                    id="1235"
                    title="Offers For You"
                    description="Paid placements from our partners"
                />
                {/* <RestaurantCard 
                imgUrl="https://i8b2m3d9.stackpathcdn.com/wp-content/uploads/2019/07/Take-away-sushi-rolls_3781NM.jpg"
                /> */}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen
